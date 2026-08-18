import React, { useState, useEffect, useMemo } from 'react';
import { Card } from '../components/common/Card';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { OutlineButton } from '../components/common/OutlineButton';
import { Link } from '../router/Link';
import { 
  Lock, 
  Unlock, 
  RefreshCw, 
  LogOut, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  GraduationCap, 
  Compass, 
  Layers, 
  MessageSquare,
  Search,
  ChevronRight,
  TrendingUp,
  Inbox,
  ShieldCheck,
  Save,
  X,
  ExternalLink,
  FileText
} from 'lucide-react';

const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyDWcMswnO7uwBL5MtNhBqP2zFHHxsNiXQyChOfZerEJ9Lsf0Hf0kI_YI8gKTEJjaenEw/exec';

type AdminTab = 'lecture' | 'consulting' | 'solution' | 'general';
type InquiryStatus = '신규' | '응대중' | '완료';

interface InquiryItem {
  id?: string | number;
  row?: number;
  submittedAt?: string;
  timestamp?: string;
  company?: string;
  contactName?: string;
  name?: string;
  phone?: string;
  email?: string;
  status?: InquiryStatus | string;
  memo?: string;
  
  // Lecture specific
  preferredDate?: string;
  duration?: string;
  location?: string;
  targetAudience?: string;
  expectedAttendees?: string;
  topic?: string;
  customTopic?: string;
  finalTopic?: string;
  budget?: string;
  message?: string;

  // Consulting specific
  industry?: string;
  companySize?: string;
  aiExperience?: string;
  urgentProblem?: string;
  targetDepartment?: string;
  startDate?: string;
  expectedOutcome?: string;
  govSupport?: string;

  // Solution specific
  targetTask?: string;
  currentSystem?: string;
  securityReq?: string;
  expectedUsers?: string;
  targetSchedule?: string;
  coachingPreference?: string;

  // Generic dynamic fields
  [key: string]: any;
}

export const AdminPage: React.FC = () => {
  const [token, setToken] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('aiforix_admin_token');
    }
    return null;
  });

  // Login State
  const [password, setPassword] = useState<string>('');
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string>('');

  // Dashboard Data State
  const [activeTab, setActiveTab] = useState<AdminTab>('lecture');
  const [statusFilter, setStatusFilter] = useState<string>('전체');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [itemsByTab, setItemsByTab] = useState<Record<AdminTab, InquiryItem[]>>({
    lecture: [],
    consulting: [],
    solution: [],
    general: [],
  });

  // Detail Modal / Drawer State
  const [selectedItem, setSelectedItem] = useState<InquiryItem | null>(null);
  const [editStatus, setEditStatus] = useState<InquiryStatus>('신규');
  const [editMemo, setEditMemo] = useState<string>('');
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [saveMessage, setSaveMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // Helper to map row array or object to InquiryItem
  const parseRowData = (row: any, headers: string[], rowIdx: number): InquiryItem => {
    const item: Record<string, any> = {
      row: rowIdx + 1, // 1-based index (헤더 제외, 1부터 시작)
    };

    if (Array.isArray(row)) {
      headers.forEach((h, i) => {
        item[h] = row[i] !== undefined && row[i] !== null ? String(row[i]) : '';
      });
    } else if (typeof row === 'object' && row !== null) {
      Object.assign(item, row);
    }

    const status = item['상태'] || item.status || '신규';
    const memo = item['메모'] || item.memo || '';
    const submittedAt = item['접수일시'] || item['일시'] || item.submittedAt || item.timestamp || '';
    const company = item['기관/회사명'] || item['회사명'] || item['기관명'] || item.company || '';
    const contactName = item['담당자'] || item['성함'] || item.contactName || item.name || '';
    let phone = String(item['연락처'] || item.phone || '').trim();
    if (phone) {
      // If leading 0 was stripped by spreadsheet (e.g., 1074003791 or 1012345678)
      if (/^1[0-9]{9}$/.test(phone)) {
        phone = '0' + phone;
      }
      // Auto format standard Korean digits to hyphens
      const digits = phone.replace(/[^0-9]/g, '');
      if (digits.length === 11 && digits.startsWith('01')) {
        phone = `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
      } else if (digits.length === 10 && digits.startsWith('01')) {
        phone = `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
      } else if (digits.length === 10 && digits.startsWith('02')) {
        phone = `${digits.slice(0, 2)}-${digits.slice(2, 6)}-${digits.slice(6)}`;
      } else if (digits.length === 9 && digits.startsWith('02')) {
        phone = `${digits.slice(0, 2)}-${digits.slice(2, 5)}-${digits.slice(5)}`;
      }
    }
    const email = item['이메일'] || item.email || '';

    // Lecture fields
    const preferredDate = item['희망일시'] || item.preferredDate || '';
    const duration = item['강의시간'] || item.duration || '';
    const location = item['장소'] || item.location || '';
    const targetAudience = item['대상'] || item.targetAudience || '';
    const expectedAttendees = item['인원'] || item.expectedAttendees || '';
    const topic = item['주제'] || item.topic || '';
    const budget = item['예산'] || item.budget || '';
    const message = item['요청사항'] || item['문의내용'] || item.message || '';

    // Consulting fields
    const industry = item['업종'] || item.industry || '';
    const companySize = item['규모'] || item.companySize || '';
    const aiExperience = item['AI경험'] || item.aiExperience || '';
    const urgentProblem = item['시급한문제'] || item.urgentProblem || '';
    const targetDepartment = item['희망부서'] || item.targetDepartment || '';
    const startDate = item['시작시기'] || item.startDate || '';
    const expectedOutcome = item['기대결과물'] || item.expectedOutcome || '';
    const govSupport = item['정부지원희망'] || item.govSupport || '';

    // Solution fields
    const targetTask = item['대상업무'] || item.targetTask || '';
    const currentSystem = item['현재시스템'] || item.currentSystem || '';
    const securityReq = item['보안요구'] || item.securityReq || '';
    const expectedUsers = item['사용자수'] || item.expectedUsers || '';
    const targetSchedule = item['일정'] || item.targetSchedule || '';
    const coachingPreference = item['직접개발희망'] || item.coachingPreference || '';

    return {
      ...item,
      row: rowIdx + 1,
      status: status || '신규',
      memo,
      submittedAt,
      company,
      contactName,
      phone,
      email,
      preferredDate,
      duration,
      location,
      targetAudience,
      expectedAttendees,
      topic,
      finalTopic: topic,
      budget,
      message,
      industry,
      companySize,
      aiExperience,
      urgentProblem,
      targetDepartment,
      startDate,
      expectedOutcome,
      govSupport,
      targetTask,
      currentSystem,
      securityReq,
      expectedUsers,
      targetSchedule,
      coachingPreference,
    };
  };

  // 1. Password Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setLoginError('비밀번호를 입력해 주세요.');
      return;
    }

    setIsLoggingIn(true);
    setLoginError('');

    try {
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'login', pw: password.trim() }),
      });

      const resText = await response.text();
      let resJson: any = {};
      try {
        resJson = JSON.parse(resText);
      } catch (parseErr) {
        resJson = { ok: true, token: 'authenticated_' + Date.now() };
      }

      if (resJson.ok && resJson.token) {
        const receivedToken = resJson.token;
        sessionStorage.setItem('aiforix_admin_token', receivedToken);
        setToken(receivedToken);
        setPassword('');
      } else {
        setLoginError(resJson.message || '비밀번호가 일치하지 않거나 접근 권한이 없습니다.');
      }
    } catch (err: any) {
      console.error('Admin login error:', err);
      setLoginError('서버 연결 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('aiforix_admin_token');
    setToken(null);
    setSelectedItem(null);
  };

  // 2. Fetch Single Type
  const fetchSingleType = async (tab: AdminTab, activeAuthToken: string) => {
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action: 'list', type: tab, token: activeAuthToken }),
    });

    const resText = await response.text();
    let resJson: any = {};
    try {
      resJson = JSON.parse(resText);
    } catch (err) {
      throw new Error('응답 파싱 오류');
    }

    if (resJson && resJson.ok === false && resJson.error === 'auth') {
      return { isAuthError: true, tab, items: [] };
    }

    if (resJson && resJson.ok) {
      const headers: string[] = Array.isArray(resJson.headers) ? resJson.headers : [];
      const rawRows: any[] = Array.isArray(resJson.rows) 
        ? resJson.rows 
        : Array.isArray(resJson.data) 
          ? resJson.data 
          : [];

      const parsedItems = rawRows.map((r, idx) => parseRowData(r, headers, idx));
      return { isAuthError: false, tab, items: parsedItems };
    }

    return { isAuthError: false, tab, items: [] };
  };

  // 3. Fetch All 4 Tabs
  const fetchAllData = async (currentToken?: string) => {
    const activeAuthToken = currentToken || token;
    if (!activeAuthToken) return;

    setIsLoading(true);
    setFetchError(null);

    try {
      const tabs: AdminTab[] = ['lecture', 'consulting', 'solution', 'general'];
      const results = await Promise.all(tabs.map((tab) => fetchSingleType(tab, activeAuthToken)));

      // Check for auth error
      const authFailed = results.some((r) => r.isAuthError);
      if (authFailed) {
        sessionStorage.removeItem('aiforix_admin_token');
        setToken(null);
        setLoginError('인증 세션이 만료되었거나 올바르지 않습니다. 다시 로그인해 주세요.');
        return;
      }

      const newMap: Record<AdminTab, InquiryItem[]> = {
        lecture: [],
        consulting: [],
        solution: [],
        general: [],
      };

      results.forEach((r) => {
        if (r.tab) {
          newMap[r.tab] = r.items;
        }
      });

      setItemsByTab(newMap);
    } catch (err) {
      console.error('Fetch all data error:', err);
      setFetchError('데이터를 불러오지 못했습니다. 새로고침을 눌러주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch all tabs on initial mount after token established
  useEffect(() => {
    if (token) {
      fetchAllData(token);
    }
  }, [token]);

  // 4. Update Status and Memo
  const handleUpdate = async () => {
    if (!selectedItem || !token) return;
    setIsSaving(true);
    setSaveMessage(null);

    try {
      const payload = {
        action: 'update',
        type: activeTab,
        row: selectedItem.row, // rows 배열의 인덱스 + 1 (헤더 제외, 1부터 시작)
        상태: editStatus,
        메모: editMemo,
        token,
      };

      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      });

      const resText = await response.text();
      let resJson: any = {};
      try {
        resJson = JSON.parse(resText);
      } catch (err) {
        resJson = { ok: true };
      }

      if (resJson && resJson.ok === false && resJson.error === 'auth') {
        sessionStorage.removeItem('aiforix_admin_token');
        setToken(null);
        setLoginError('인증 세션이 만료되었습니다. 다시 로그인해 주세요.');
        return;
      }

      // Update locally
      setItemsByTab((prev) => ({
        ...prev,
        [activeTab]: prev[activeTab].map((item) =>
          item.row === selectedItem.row
            ? { ...item, status: editStatus, memo: editMemo, 상태: editStatus, 메모: editMemo }
            : item
        ),
      }));

      setSelectedItem((prev) => (prev ? { ...prev, status: editStatus, memo: editMemo, 상태: editStatus, 메모: editMemo } : null));
      setSaveMessage({ text: '성공적으로 저장되었습니다.', type: 'success' });

      // Refresh list to sync with server
      fetchAllData();

      setTimeout(() => setSaveMessage(null), 3000);
    } catch (err) {
      console.error('Update error:', err);
      setSaveMessage({ text: '저장 중 오류가 발생했습니다.', type: 'error' });
    } finally {
      setIsSaving(false);
    }
  };

  // 4. Statistics Calculation
  const stats = useMemo(() => {
    const allItems = [
      ...itemsByTab.lecture,
      ...itemsByTab.consulting,
      ...itemsByTab.solution,
      ...itemsByTab.general,
    ];

    const totalCount = allItems.length;

    // This week items
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    const thisWeekCount = allItems.filter((item) => {
      const dateStr = item.submittedAt || item.timestamp || item['접수일시'] || item['일시'];
      if (!dateStr) return false;
      let d = new Date(dateStr);
      if (isNaN(d.getTime())) {
        const cleaned = String(dateStr).replace(/\./g, '-').replace(/오후/g, 'PM').replace(/오전/g, 'AM');
        d = new Date(cleaned);
      }
      return !isNaN(d.getTime()) ? d >= oneWeekAgo : false;
    }).length;

    // New status count
    const newCount = allItems.filter((item) => (item.status || item.상태 || '신규') === '신규').length;
    const progressCount = allItems.filter((item) => (item.status || item.상태) === '응대중').length;
    const doneCount = allItems.filter((item) => (item.status || item.상태) === '완료').length;

    return {
      total: totalCount,
      thisWeek: thisWeekCount,
      new: newCount,
      progress: progressCount,
      done: doneCount,
      lecture: itemsByTab.lecture.length,
      consulting: itemsByTab.consulting.length,
      solution: itemsByTab.solution.length,
      general: itemsByTab.general.length,
    };
  }, [itemsByTab]);

  // 5. Filtered Items for current active tab
  const currentTabItems = useMemo(() => {
    const raw = itemsByTab[activeTab] || [];
    return raw
      .filter((item) => {
        const itemStatus = item.status || item.상태 || '신규';
        if (statusFilter !== '전체' && itemStatus !== statusFilter) {
          return false;
        }
        if (searchQuery.trim()) {
          const query = searchQuery.toLowerCase();
          const target = [
            item.company,
            item.contactName,
            item.name,
            item.phone,
            item.email,
            item.topic,
            item.targetTask,
            item.urgentProblem,
            item.message,
          ]
            .filter(Boolean)
            .join(' ')
            .toLowerCase();
          return target.includes(query);
        }
        return true;
      })
      .sort((a, b) => {
        const dateA = new Date(a.submittedAt || a.timestamp || 0).getTime();
        const dateB = new Date(b.submittedAt || b.timestamp || 0).getTime();
        return dateB - dateA;
      });
  }, [itemsByTab, activeTab, statusFilter, searchQuery]);

  const openDetail = (item: InquiryItem) => {
    setSelectedItem(item);
    setEditStatus((item.status as InquiryStatus) || '신규');
    setEditMemo(item.memo || '');
    setSaveMessage(null);
  };

  const getStatusBadge = (status?: string) => {
    const s = status || '신규';
    if (s === '신규') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#FEF3C7] text-[#B45309] border border-[#FDE68A]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] animate-pulse"></span>
          신규
        </span>
      );
    }
    if (s === '응대중') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#E6F0FF] text-[#0A5EDD] border border-[#0A5EDD]/20">
          <Clock className="w-3 h-3 text-[#0A5EDD]" />
          응대중
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#EDE9FE] text-[#6D28D9] border border-[#6D28D9]/20">
        <CheckCircle2 className="w-3 h-3 text-[#6D28D9]" />
        완료
      </span>
    );
  };

  // If Not Authenticated -> Login Screen
  if (!token) {
    return (
      <div id="admin-login" className="w-full py-16 md:py-24 bg-[#F1F5F9] flex items-center justify-center min-h-[70vh]">
        <div className="max-w-md w-full mx-auto px-4">
          <Card className="p-8 sm:p-10 shadow-ds-md border border-gray-200 bg-white">
            <div className="w-14 h-14 rounded-full bg-[#E6F0FF] text-[#0A5EDD] flex items-center justify-center mx-auto mb-5 shadow-ds-sm">
              <Lock className="w-7 h-7" />
            </div>
            
            <div className="text-center mb-6">
              <span className="inline-block px-3 py-1 mb-2 text-xs font-mono font-bold text-[#0A5EDD] bg-[#E6F0FF] rounded-full border border-[#0A5EDD]/20">
                AIFORIX ADMIN PORTAL
              </span>
              <h1 className="text-2xl font-extrabold text-[#1F2937]">
                관리자 로그인
              </h1>
              <p className="text-xs sm:text-sm text-[#4B5563] mt-2">
                인가된 관리자 비밀번호를 입력하여 문의 관리 대시보드에 접근하세요.
              </p>
            </div>

            {loginError && (
              <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-[8px] text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                  관리자 비밀번호
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호를 입력하세요"
                  required
                  autoFocus
                  className="w-full bg-white border border-gray-300 rounded-[8px] px-3.5 py-2.5 text-sm text-[#1F2937] focus:outline-hidden focus:border-[#0A5EDD] focus:ring-2 focus:ring-[#0A5EDD]/20"
                />
              </div>

              <PrimaryButton
                type="submit"
                fullWidth
                size="lg"
                disabled={isLoggingIn}
                icon={isLoggingIn ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Unlock className="w-4 h-4" />}
              >
                {isLoggingIn ? '인증 중...' : '대시보드 접속'}
              </PrimaryButton>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <Link to="/">
                <span className="text-xs font-semibold text-[#4B5563] hover:text-[#0A5EDD] transition-colors">
                  &larr; AIFORIX 홈페이지로 돌아가기
                </span>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // If Authenticated -> Admin Dashboard
  return (
    <div id="admin-dashboard" className="w-full min-h-screen bg-[#F1F5F9] pb-16">
      {/* Top Header Bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-ds-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-[8px] bg-[#0A5EDD] text-white flex items-center justify-center font-bold text-sm">
              A
            </div>
            <div>
              <span className="text-base font-extrabold text-[#1F2937] tracking-tight">
                AIFORIX <span className="text-[#0A5EDD] text-xs font-mono font-bold px-1.5 py-0.5 bg-[#E6F0FF] rounded-[4px] ml-1">ADMIN</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => fetchAllData()}
              disabled={isLoading}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] text-xs font-bold bg-[#F1F5F9] border border-gray-200 text-[#1F2937] hover:bg-gray-200 transition-colors cursor-pointer"
              title="데이터 새로고침"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-[#0A5EDD]' : ''}`} />
              <span className="hidden sm:inline">{isLoading ? '조회 중...' : '새로고침'}</span>
            </button>

            <Link to="/">
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-[8px] text-xs font-bold bg-white border border-gray-200 text-[#4B5563] hover:text-[#1F2937] hover:bg-gray-50 transition-colors cursor-pointer">
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">사이트 보기</span>
              </button>
            </Link>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] text-xs font-bold bg-red-50 border border-red-200 text-red-700 hover:bg-red-100 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>로그아웃</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
        {/* Fetch Error Banner */}
        {fetchError && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-[12px] text-xs text-red-700 flex items-center justify-between shadow-ds-sm">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
              <span className="font-semibold">{fetchError}</span>
            </div>
            <button
              onClick={() => fetchAllData()}
              className="px-3 py-1 bg-red-100 hover:bg-red-200 text-red-800 rounded-[6px] font-bold transition-colors cursor-pointer"
            >
              새로고침
            </button>
          </div>
        )}

        {/* 1. Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: New Highlight */}
          <div className="bg-white border-2 border-[#B45309] rounded-[14px] p-4 sm:p-5 shadow-ds-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 w-16 h-16 bg-[#FEF3C7] rounded-full opacity-60 pointer-events-none"></div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-[#B45309] uppercase tracking-wider">신규 접수 (미처리)</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#B45309] animate-ping"></span>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#B45309] font-mono">
                {stats.new}
              </span>
              <span className="text-xs text-[#9CA3AF] font-semibold">건</span>
            </div>
            <span className="text-[11px] text-[#B45309] block mt-1 font-medium">
              신속한 4시간 이내 응대 필요
            </span>
          </div>

          {/* Card 2: This Week */}
          <div className="bg-white border border-gray-200 rounded-[14px] p-4 sm:p-5 shadow-ds-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#9CA3AF]">이번 주 문의</span>
              <TrendingUp className="w-4 h-4 text-[#0A5EDD]" />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#1F2937] font-mono">
                {stats.thisWeek}
              </span>
              <span className="text-xs text-[#9CA3AF] font-semibold">건</span>
            </div>
            <span className="text-[11px] text-[#9CA3AF] block mt-1">최근 7일간 접수된 문의</span>
          </div>

          {/* Card 3: In Progress */}
          <div className="bg-white border border-gray-200 rounded-[14px] p-4 sm:p-5 shadow-ds-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#9CA3AF]">응대 중</span>
              <Clock className="w-4 h-4 text-[#0A5EDD]" />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#0A5EDD] font-mono">
                {stats.progress}
              </span>
              <span className="text-xs text-[#9CA3AF] font-semibold">건</span>
            </div>
            <span className="text-[11px] text-[#9CA3AF] block mt-1">상담 및 제안 진행 중</span>
          </div>

          {/* Card 4: Total Completed */}
          <div className="bg-white border border-gray-200 rounded-[14px] p-4 sm:p-5 shadow-ds-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#9CA3AF]">누적 완료</span>
              <CheckCircle2 className="w-4 h-4 text-[#6D28D9]" />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#6D28D9] font-mono">
                {stats.done}
              </span>
              <span className="text-xs text-[#9CA3AF] font-semibold">건 / 총 {stats.total}건</span>
            </div>
            <span className="text-[11px] text-[#9CA3AF] block mt-1">계약 및 출강 완료</span>
          </div>
        </div>

        {/* 2. Main Content Board */}
        <div className="bg-white border border-gray-200 rounded-[16px] shadow-ds-sm overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-gray-200 bg-[#F9FAFB] px-4 sm:px-6 pt-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex space-x-1 sm:space-x-2">
              <button
                onClick={() => setActiveTab('lecture')}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'lecture'
                    ? 'border-[#0A5EDD] text-[#0A5EDD] bg-white rounded-t-lg shadow-ds-sm'
                    : 'border-transparent text-[#4B5563] hover:text-[#1F2937]'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>강의 문의</span>
                <span className="px-1.5 py-0.2 bg-gray-100 text-gray-600 rounded text-[11px] font-mono font-semibold">
                  {stats.lecture}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('consulting')}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'consulting'
                    ? 'border-[#6D28D9] text-[#6D28D9] bg-white rounded-t-lg shadow-ds-sm'
                    : 'border-transparent text-[#4B5563] hover:text-[#1F2937]'
                }`}
              >
                <Compass className="w-4 h-4" />
                <span>컨설팅 문의</span>
                <span className="px-1.5 py-0.2 bg-gray-100 text-gray-600 rounded text-[11px] font-mono font-semibold">
                  {stats.consulting}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('solution')}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'solution'
                    ? 'border-[#B45309] text-[#B45309] bg-white rounded-t-lg shadow-ds-sm'
                    : 'border-transparent text-[#4B5563] hover:text-[#1F2937]'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>자동화·솔루션</span>
                <span className="px-1.5 py-0.2 bg-gray-100 text-gray-600 rounded text-[11px] font-mono font-semibold">
                  {stats.solution}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('general')}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'general'
                    ? 'border-[#1F2937] text-[#1F2937] bg-white rounded-t-lg shadow-ds-sm'
                    : 'border-transparent text-[#4B5563] hover:text-[#1F2937]'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>일반 문의</span>
                <span className="px-1.5 py-0.2 bg-gray-100 text-gray-600 rounded text-[11px] font-mono font-semibold">
                  {stats.general}
                </span>
              </button>
            </div>

            {/* Filter & Search Toolbar */}
            <div className="pb-3 flex flex-wrap items-center gap-2 w-full lg:w-auto">
              <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-[8px] p-1 shadow-ds-sm">
                {(['전체', '신규', '응대중', '완료'] as const).map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-2.5 py-1 text-xs font-bold rounded-[6px] transition-colors cursor-pointer ${
                      statusFilter === st
                        ? 'bg-[#0A5EDD] text-white'
                        : 'text-[#4B5563] hover:bg-gray-100'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

              <div className="relative flex-1 sm:w-60">
                <Search className="w-3.5 h-3.5 text-[#9CA3AF] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="회사명, 담당자, 내용 검색..."
                  className="w-full bg-white border border-gray-200 rounded-[8px] pl-8 pr-3 py-1.5 text-xs text-[#1F2937] focus:outline-hidden focus:border-[#0A5EDD]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* List Area */}
          <div className="p-4 sm:p-6">
            {currentTabItems.length === 0 ? (
              <div className="text-center py-16 bg-[#F9FAFB] rounded-[12px] border border-dashed border-gray-200">
                <Inbox className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                <p className="text-sm font-bold text-[#4B5563]">
                  {searchQuery || statusFilter !== '전체'
                    ? '조건에 부합하는 문의 내역이 없습니다.'
                    : '접수된 문의 내역이 없습니다.'}
                </p>
                <p className="text-xs text-[#9CA3AF] mt-1">
                  Google 스프레드시트와 실시간 연동되어 새 문의 접수 시 표시됩니다.
                </p>
              </div>
            ) : (
              <div>
                {/* 1. Desktop Table View */}
                <div className="hidden sm:block overflow-x-auto border border-gray-200 rounded-[10px] shadow-ds-sm">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-[#F1F5F9] border-b border-gray-200 text-[#4B5563] font-bold">
                        <th className="py-3 px-4 w-16 text-center">No.</th>
                        <th className="py-3 px-4 w-28">상태</th>
                        <th className="py-3 px-4 w-36">접수일시</th>
                        <th className="py-3 px-4">회사 / 기관명</th>
                        <th className="py-3 px-4">담당자</th>
                        <th className="py-3 px-4">연락처 / 이메일</th>
                        <th className="py-3 px-4">주요 내용</th>
                        <th className="py-3 px-4 w-20 text-center">관리</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {currentTabItems.map((item, idx) => {
                        const dateFormatted = item.submittedAt
                          ? new Date(item.submittedAt).toLocaleString('ko-KR', {
                              month: 'numeric',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })
                          : item.timestamp || '-';

                        const mainTopic =
                          item.topic ||
                          item.finalTopic ||
                          item.targetTask ||
                          item.urgentProblem ||
                          item.message ||
                          '-';

                        return (
                          <tr
                            key={idx}
                            onClick={() => openDetail(item)}
                            className="hover:bg-[#F1F5F9]/80 cursor-pointer transition-colors"
                          >
                            <td className="py-3.5 px-4 text-center font-mono text-[#9CA3AF]">
                              {idx + 1}
                            </td>
                            <td className="py-3.5 px-4">
                              {getStatusBadge(item.status || item.상태)}
                            </td>
                            <td className="py-3.5 px-4 font-mono text-[#4B5563] whitespace-nowrap">
                              {dateFormatted}
                            </td>
                            <td className="py-3.5 px-4 font-bold text-[#1F2937]">
                              {item.company || item.기관명 || item.회사명 || '-'}
                            </td>
                            <td className="py-3.5 px-4 text-[#1F2937]">
                              {item.contactName || item.name || item.성함 || '-'}
                            </td>
                            <td className="py-3.5 px-4 text-[#4B5563]">
                              <div>{item.phone || item.연락처 || '-'}</div>
                              <div className="text-[11px] text-[#9CA3AF]">{item.email || item.이메일 || '-'}</div>
                            </td>
                            <td className="py-3.5 px-4 text-[#4B5563] max-w-xs truncate">
                              <span title={mainTopic}>{mainTopic}</span>
                              {item.memo && (
                                <div className="text-[11px] text-[#0A5EDD] font-semibold mt-0.5 truncate">
                                  📝 {item.memo}
                                </div>
                              )}
                            </td>
                            <td className="py-3.5 px-4 text-center">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openDetail(item);
                                }}
                                className="px-2.5 py-1 text-xs font-bold text-[#0A5EDD] bg-[#E6F0FF] hover:bg-[#d0e4ff] rounded-[6px] transition-colors cursor-pointer"
                              >
                                상세
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* 2. Mobile Card View */}
                <div className="block sm:hidden space-y-3">
                  {currentTabItems.map((item, idx) => {
                    const dateFormatted = item.submittedAt
                      ? new Date(item.submittedAt).toLocaleDateString('ko-KR', {
                          month: 'numeric',
                          day: 'numeric',
                        })
                      : item.timestamp || '-';

                    const mainTopic =
                      item.topic ||
                      item.finalTopic ||
                      item.targetTask ||
                      item.urgentProblem ||
                      item.message ||
                      '-';

                    return (
                      <div
                        key={idx}
                        onClick={() => openDetail(item)}
                        className="bg-white border border-gray-200 rounded-[12px] p-4 shadow-ds-sm space-y-3 active:scale-[0.99] transition-transform cursor-pointer"
                      >
                        <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
                          <div className="flex items-center gap-2">
                            {getStatusBadge(item.status || item.상태)}
                            <span className="text-[11px] font-mono text-[#9CA3AF]">
                              {dateFormatted}
                            </span>
                          </div>
                          <span className="text-xs font-bold text-[#0A5EDD] flex items-center">
                            상세보기 <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </div>

                        <div>
                          <h4 className="text-sm font-bold text-[#1F2937]">
                            {item.company || item.기관명 || item.회사명 || '회사명 미기재'}
                          </h4>
                          <p className="text-xs text-[#4B5563] mt-0.5 flex items-center gap-2">
                            <span>{item.contactName || item.name || '-'}</span>
                            <span className="text-gray-300">•</span>
                            <span>{item.phone || '-'}</span>
                          </p>
                        </div>

                        <div className="bg-[#F1F5F9] rounded-[8px] p-2.5 text-xs text-[#4B5563] line-clamp-2">
                          {mainTopic}
                        </div>

                        {item.memo && (
                          <div className="text-[11px] text-[#0A5EDD] bg-[#E6F0FF] px-2 py-1 rounded-[4px] font-medium">
                            📝 관리자 메모: {item.memo}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3. Detail & Update Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-[16px] max-w-2xl w-full max-h-[90vh] flex flex-col shadow-ds-xl border border-gray-200 overflow-hidden animate-in fade-in zoom-in duration-150">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-[#0A5EDD] text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-white/80" />
                <h3 className="text-base sm:text-lg font-bold">
                  문의 상세 정보 및 상태 관리
                </h3>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm">
              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#F1F5F9] p-4 rounded-[12px] border border-gray-200">
                <div>
                  <span className="text-xs text-[#9CA3AF] font-bold block mb-1">회사 / 기관명</span>
                  <span className="text-sm font-extrabold text-[#1F2937]">
                    {selectedItem.company || selectedItem.기관명 || selectedItem.회사명 || '-'}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-[#9CA3AF] font-bold block mb-1">담당자 성함</span>
                  <span className="text-sm font-extrabold text-[#1F2937]">
                    {selectedItem.contactName || selectedItem.name || '-'}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-[#9CA3AF] font-bold block mb-1">연락처</span>
                  <a
                    href={`tel:${selectedItem.phone}`}
                    className="text-sm font-bold text-[#0A5EDD] hover:underline font-mono"
                  >
                    {selectedItem.phone || '-'}
                  </a>
                </div>
                <div>
                  <span className="text-xs text-[#9CA3AF] font-bold block mb-1">이메일</span>
                  <a
                    href={`mailto:${selectedItem.email}`}
                    className="text-sm font-bold text-[#0A5EDD] hover:underline"
                  >
                    {selectedItem.email || '-'}
                  </a>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-xs text-[#9CA3AF] font-bold block mb-1">접수 일시</span>
                  <span className="text-xs font-mono text-[#4B5563]">
                    {selectedItem.submittedAt
                      ? new Date(selectedItem.submittedAt).toLocaleString('ko-KR')
                      : selectedItem.timestamp || '-'}
                  </span>
                </div>
              </div>

              {/* Dynamic Content depending on Tab */}
              <div className="space-y-4 border-t border-gray-100 pt-4">
                <h4 className="text-xs font-extrabold text-[#0A5EDD] uppercase tracking-wider">
                  제출된 세부 내용
                </h4>

                {/* Lecture Specific */}
                {activeTab === 'lecture' && (
                  <div className="grid grid-cols-2 gap-3 bg-[#F1F5F9] p-4 rounded-[10px] text-xs">
                    <div>
                      <span className="text-[#9CA3AF] font-semibold block">희망 일시</span>
                      <span className="font-bold text-[#1F2937]">{selectedItem.preferredDate || '-'}</span>
                    </div>
                    <div>
                      <span className="text-[#9CA3AF] font-semibold block">강의 시간</span>
                      <span className="font-bold text-[#1F2937]">{selectedItem.duration || '-'}</span>
                    </div>
                    <div>
                      <span className="text-[#9CA3AF] font-semibold block">장소</span>
                      <span className="font-bold text-[#1F2937]">{selectedItem.location || '-'}</span>
                    </div>
                    <div>
                      <span className="text-[#9CA3AF] font-semibold block">교육 대상</span>
                      <span className="font-bold text-[#1F2937]">{selectedItem.targetAudience || '-'}</span>
                    </div>
                    <div>
                      <span className="text-[#9CA3AF] font-semibold block">예상 인원</span>
                      <span className="font-bold text-[#1F2937]">{selectedItem.expectedAttendees || '-'}</span>
                    </div>
                    <div>
                      <span className="text-[#9CA3AF] font-semibold block">희망 주제</span>
                      <span className="font-bold text-[#0A5EDD]">{selectedItem.topic || selectedItem.finalTopic || '-'}</span>
                    </div>
                    {selectedItem.budget && (
                      <div className="col-span-2">
                        <span className="text-[#9CA3AF] font-semibold block">예산 규모</span>
                        <span className="font-bold text-[#1F2937]">{selectedItem.budget}</span>
                      </div>
                    )}
                    {selectedItem.message && (
                      <div className="col-span-2 mt-2 pt-2 border-t border-gray-200">
                        <span className="text-[#9CA3AF] font-semibold block mb-1">기타 요청사항</span>
                        <p className="text-[#4B5563] whitespace-pre-wrap leading-relaxed">
                          {selectedItem.message}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Consulting Specific */}
                {activeTab === 'consulting' && (
                  <div className="space-y-3 bg-[#F1F5F9] p-4 rounded-[10px] text-xs">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-[#9CA3AF] font-semibold block">업종</span>
                        <span className="font-bold text-[#1F2937]">{selectedItem.industry || '-'}</span>
                      </div>
                      <div>
                        <span className="text-[#9CA3AF] font-semibold block">기업 규모</span>
                        <span className="font-bold text-[#1F2937]">{selectedItem.companySize || '-'}</span>
                      </div>
                      <div>
                        <span className="text-[#9CA3AF] font-semibold block">AI 도입 경험</span>
                        <span className="font-bold text-[#1F2937]">{selectedItem.aiExperience || '-'}</span>
                      </div>
                      <div>
                        <span className="text-[#9CA3AF] font-semibold block">정부지원사업 연계</span>
                        <span className="font-bold text-[#1F2937]">{selectedItem.govSupport || '-'}</span>
                      </div>
                    </div>
                    <div className="mt-2 pt-2 border-t border-gray-200">
                      <span className="text-[#9CA3AF] font-semibold block mb-1">가장 시급한 업무 문제 (Problem)</span>
                      <p className="text-[#1F2937] font-medium bg-white p-3 rounded-[8px] border border-gray-200 leading-relaxed whitespace-pre-wrap">
                        {selectedItem.urgentProblem || '-'}
                      </p>
                    </div>
                    {selectedItem.targetDepartment && (
                      <div>
                        <span className="text-[#9CA3AF] font-semibold block">도입 희망 부서</span>
                        <span className="font-bold text-[#1F2937]">{selectedItem.targetDepartment}</span>
                      </div>
                    )}
                    {selectedItem.expectedOutcome && (
                      <div>
                        <span className="text-[#9CA3AF] font-semibold block">기대 결과물</span>
                        <span className="font-bold text-[#1F2937]">{selectedItem.expectedOutcome}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Solution Specific */}
                {activeTab === 'solution' && (
                  <div className="space-y-3 bg-[#F1F5F9] p-4 rounded-[10px] text-xs">
                    <div>
                      <span className="text-[#9CA3AF] font-semibold block mb-1">자동화 희망 업무</span>
                      <p className="text-[#1F2937] font-bold bg-white p-3 rounded-[8px] border border-gray-200 leading-relaxed">
                        {selectedItem.targetTask || '-'}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-[#9CA3AF] font-semibold block">현재 시스템</span>
                        <span className="font-bold text-[#1F2937]">{selectedItem.currentSystem || '-'}</span>
                      </div>
                      <div>
                        <span className="text-[#9CA3AF] font-semibold block">보안 요구사항</span>
                        <span className="font-bold text-[#1F2937]">{selectedItem.securityReq || '-'}</span>
                      </div>
                      <div>
                        <span className="text-[#9CA3AF] font-semibold block">예상 사용자</span>
                        <span className="font-bold text-[#1F2937]">{selectedItem.expectedUsers || '-'}</span>
                      </div>
                      <div>
                        <span className="text-[#9CA3AF] font-semibold block">목표 일정</span>
                        <span className="font-bold text-[#1F2937]">{selectedItem.targetSchedule || '-'}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* General Specific */}
                {activeTab === 'general' && (
                  <div className="bg-[#F1F5F9] p-4 rounded-[10px] text-xs">
                    <span className="text-[#9CA3AF] font-semibold block mb-1">문의 내용</span>
                    <p className="text-[#1F2937] font-medium bg-white p-3 rounded-[8px] border border-gray-200 leading-relaxed whitespace-pre-wrap">
                      {selectedItem.message || '-'}
                    </p>
                  </div>
                )}
              </div>

              {/* Status Update & Note Control */}
              <div className="border-t border-gray-200 pt-5 space-y-4">
                <h4 className="text-xs font-extrabold text-[#1F2937] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#0A5EDD]" />
                  <span>관리자 응대 처리</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                      상태 변경
                    </label>
                    <select
                      value={editStatus}
                      onChange={(e) => setEditStatus(e.target.value as InquiryStatus)}
                      className="w-full bg-white border border-gray-300 rounded-[8px] px-3.5 py-2 text-xs font-bold text-[#1F2937] focus:outline-hidden focus:border-[#0A5EDD]"
                    >
                      <option value="신규">신규 (접수 대기)</option>
                      <option value="응대중">응대중 (상담/견적서 발송)</option>
                      <option value="완료">완료 (계약/강의 종료)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                    관리자 내부 메모
                  </label>
                  <textarea
                    rows={3}
                    value={editMemo}
                    onChange={(e) => setEditMemo(e.target.value)}
                    placeholder="응대 이력, 유선 상담 내용, 견적 금액, 특이사항 등을 기록하세요."
                    className="w-full bg-white border border-gray-300 rounded-[8px] p-3 text-xs text-[#1F2937] focus:outline-hidden focus:border-[#0A5EDD]"
                  />
                </div>

                {saveMessage && (
                  <div
                    className={`p-3 rounded-[8px] text-xs flex items-center gap-2 ${
                      saveMessage.type === 'success'
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{saveMessage.text}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-[#F9FAFB] border-t border-gray-200 flex items-center justify-between shrink-0">
              <OutlineButton size="sm" onClick={() => setSelectedItem(null)}>
                닫기
              </OutlineButton>

              <PrimaryButton
                size="sm"
                onClick={handleUpdate}
                disabled={isSaving}
                icon={isSaving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              >
                {isSaving ? '저장 중...' : '상태 및 메모 저장'}
              </PrimaryButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

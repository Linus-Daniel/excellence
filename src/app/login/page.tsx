"use client"
import { ErrorInfo, FormEvent, useState } from 'react';
import AuthLayout from '@/components/authLayout';
import { useRouter } from 'next/navigation';

export default function TeacherLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Replace with actual API call
      const res = await fetch('/api/auth/teacher/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      
      router.push('/teacher/dashboard');
    } catch (err:any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Teacher Login">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#5a1f61] mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#712779] focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-[#5a1f61] mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#712779] focus:border-transparent"
            required
          />
        </div>
        
        {error && (
          <div className="text-red-500 text-sm text-center py-2">
            {error}
          </div>
        )}
        
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 rounded-md text-white font-medium ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#712779] hover:bg-[#5a1f61]'}`}
        >
          {loading ? 'Logging in...' : 'Login as Teacher'}
        </button>
        
        <div className="text-center text-sm">
          <a 
            href="/teacher/forgot-password" 
            className="text-[#712779] hover:underline"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </AuthLayout>
  );
}
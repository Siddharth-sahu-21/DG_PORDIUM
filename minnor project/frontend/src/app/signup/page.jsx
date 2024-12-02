'use client'
import Link from 'next/link';
import React from 'react';

const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="max-w-md w-full bg-black border border-gray-700 rounded-lg shadow-lg">
        <form action="" className="px-8 py-6">
          <h2 className="text-2xl font-bold text-center text-white mb-4">
            Sign Up</h2>
             <Link href="/signin" className='text-center text-blue-400 mb-4'>Already have an account Sign In</Link>
            

          <div className="mb-4">
            <label className="block text-white font-medium mb-1" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full py-2 px-3 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="w-full py-2 px-3 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white font-medium mb-1" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              id="confirm-password"
              type="password"
              required
              className="w-full py-2 px-3 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="terms"
              required
              className="mr-2"
            />
            <label htmlFor="terms" className="text-white">
              I agree to the{' '}
              <Link href="/termcondition" className="text-blue-400 hover:underline">
                Terms & Conditions
              </Link>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;


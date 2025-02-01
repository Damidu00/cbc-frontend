import React from 'react';

export default function FeedbackCart({ feedback }) {
  return (
    <div className='flex justify-center p-4'>
      <div className='w-full max-w-xl bg-white shadow-md rounded-xl p-6 border border-gray-200'>
        <h1 className='text-2xl font-semibold text-black mb-4'>Customer Feedback</h1>
        <p className='text-gray-900'>{feedback.message || "No message provided."}</p>

        <div className='mt-6 p-4 bg-gray-100 rounded-lg'>
          <h2 className='text-lg font-medium text-gray-900'>Reply</h2>
          {feedback.status === 'replied' && feedback.adminReply?.length > 0 ? (
            feedback.adminReply.map((reply, index) => (
              <p key={index} className='text-gray-700'>{reply.message}</p>
            ))
          ) : (
            <p className=' text-red-500'>Not replied yet</p>
          )}
        </div>
      </div>
    </div>
  );
}

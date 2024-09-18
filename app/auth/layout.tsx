import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div 
			className="flex items-center justify-center min-h-screen"
			style={{
				background: 'linear-gradient(-45deg, #8f65ec, #6e6cf5, #00b8f8)',
				backgroundSize: '400% 400%',
				animation: 'gradient 5s ease infinite'
			}}
		>
      <div 
			className="relative p-[25px] sm:p-[50px] bg-white thee-d-block"
			style={{
				boxShadow: '-55px -55px 0 rgba(0, 0, 0, 0.05)'
			}}
			>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;

import React from 'react';

export default function Layout({children}: React.PropsWithChildren) {
    return  <main className="min-h-screen">{children}</main>;
}
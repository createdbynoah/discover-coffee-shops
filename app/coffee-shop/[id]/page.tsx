import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';

const Page = (props: { params: { id: string } }) => {
  const {
    params: { id },
  } = props;
  return (
    <div>
      <div className="h-full pb-80">
        <div className="m-auto grid max-w-full px-12 py-12 lg:max-w-6xl lg:grid-cols-2 lg:gap-4">
          <div className="mb-2 mt-24 text-lg font-bold">
            <Link href="/">
              <FaArrowLeft className="inline pb-1" /> Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

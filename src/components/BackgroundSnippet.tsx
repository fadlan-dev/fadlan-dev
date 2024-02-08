import { FunctionComponent } from 'react';

interface BackgroundSnippetProps {}

const BackgroundSnippet: FunctionComponent<BackgroundSnippetProps> = () => {
  return (
    <div className='fixed h-full w-full -z-10'>
      <div className='absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(#0000001a_1px,#ffffff33_1px)] dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]'></div>
    </div>
  );
};

export default BackgroundSnippet;

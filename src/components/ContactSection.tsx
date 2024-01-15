'use client';
import { Button } from './ui/Button';

type Props = {};

const Index = (props: Props) => {
  function mailTo() {
    window.location.href = 'mailto:fadlan.jehteerokee@gmail.com';
  }
  return (
    <section id='contact'>
      <div className='container px-6'>
        <div className='flex flex-col items-center py-32'>
          <h2 className='text-foreground text-2xl font-bold'>What’s Next?</h2>
          <h2 className={`text-5xl font-bold mt-4 text-foreground`}>
            Get In Touch
          </h2>
          <p
            className={`w-full sm:w-2/3 md:w-2/3 lg:w-2/4 text-center text-muted-foreground mt-4`}
          >
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <Button className='mt-4' variant='secondary' onClick={() => mailTo()}>
            Say Hello
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Index;

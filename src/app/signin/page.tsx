import SignInButton from '@/components/ui/SignInButton';

export default function SignIn() {
  return (
    <main>
      <h2>SignIn</h2>

      <SignInButton provider="github" />

      <SignInButton provider="google" />
    </main>
  );
}

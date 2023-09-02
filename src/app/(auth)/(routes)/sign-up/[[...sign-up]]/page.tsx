import { SignUp } from "@clerk/nextjs";

/* 
pages/sign-up/[[...sign-up]]/page.tsx ไฟล์นี้จะ match กับ URL ทั้ง /sign-up, /sign-up/a, /sign-up/a/b, /sign-up/a/b/c และอื่น ๆ

ค่าของ params จะเป็นดังนี้:
/sign-up: {}
/sign-up/a: { slug: ['a'] }
/sign-up/a/b: { slug: ['a', 'b'] }
/sign-up/a/b/c: { slug: ['a', 'b', 'c'] }

*/

export default function Page() {
  return <SignUp />;
}

import Layout from "../components/Layout";

export default function Home() {
  return (
    <div
      className={`
      flex h-screen
      justify-center
      items-center
      bg-gradient-to-r
      from-purple-500
      to-blue-300
      text-white`}
    >
      <Layout title='Simple | Sig-in'>
        <span>Content</span>
      </Layout>
    </div>
  );
}

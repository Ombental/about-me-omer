function Resume() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">What I Work With</h1>
      <ul className="list-none space-y-4">
        <li>
          <h2 className="text-2xl font-semibold">Software Development</h2>
          <p>Building and maintaining applications from idea to production.</p>
        </li>
        <li>
          <h2 className="text-2xl font-semibold">AI &amp; LLM Tools</h2>
          <p>Experimenting with LLMs, agents and bots to automate and explore knowledge.</p>
        </li>
        <li>
          <h2 className="text-2xl font-semibold">Cloud &amp; DevOps</h2>
          <p>Containers, CI/CD pipelines and cloud deployments that just work.</p>
        </li>
      </ul>
    </div>
  );
}

export default Resume;

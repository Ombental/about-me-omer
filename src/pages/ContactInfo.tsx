function ContactInfo() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>
      <p className="text-lg">
        The best way to reach me is on X.
      </p>
      <a
        href="https://twitter.com/elonmusk"
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent-color hover:underline mt-4 inline-block"
      >
        @elonmusk
      </a>
    </div>
  );
}

export default ContactInfo;

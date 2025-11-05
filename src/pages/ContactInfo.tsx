function ContactInfo() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Contact Info</h1>
      <p className="mb-4">You can reach me through my companies:</p>
      <ul className="list-disc list-inside">
        <li className="mb-2">SpaceX Starbase Launch Facility: 310-363-6000</li>
        <li className="mb-2">Tesla Toll-Free: (877) 798-3752</li>
        <li className="mb-2">Musk Foundation: 737-235-6956</li>
      </ul>
      <p className="mt-4">You can also find me on X (formerly Twitter) <a href="https://twitter.com/elonmusk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@elonmusk</a>.</p>
    </div>
  )
}

export default ContactInfo

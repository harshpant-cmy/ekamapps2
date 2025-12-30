
const TrustedBy = () => {
  const clients = [
    "NUTANIX",
    "NYU",
    "STITCH FIX",
    "zendesk",
    "Adobe",
    "ATLASSIAN",
    "Gridiron",
    "Real Savvy",
    "GoldStar Mortgage",
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-gray-500 text-sm uppercase tracking-wider font-medium">
            Trusted by innovative teams at
          </p>
        </div>

        {/* Logo Marquee */}
        <div className="relative overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling Container */}
          <div className="flex animate-marquee">
            {/* First set */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center min-w-[200px] px-8"
              >
                <span className="text-gray-400 hover:text-ekam-primary font-semibold text-lg tracking-wide whitespace-nowrap transition-colors">
                  {client}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center min-w-[200px] px-8"
              >
                <span className="text-gray-400 hover:text-ekam-primary font-semibold text-lg tracking-wide whitespace-nowrap transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;

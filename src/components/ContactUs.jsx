export default function ContactUs() {
    return (
      <section id="contact" className="bg-orange-500 text-white py-12 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
        
        {/* Phone Numbers */}
        <div className="text-lg md:text-xl space-y-2">
          <p>
            <a href="tel:+918799746047" className="hover:underline">
              +91 87997 46047
            </a>,{" "}
            <a href="tel:+918955578234" className="hover:underline">
              +91 89555 78234
            </a>
          </p>
  
          {/* Email */}
          <p>
            <a href="mailto:a@anivarti.com" className="hover:underline">
              a@anivarti.com
            </a>
          </p>
        </div>
      </section>
    );
  }
  
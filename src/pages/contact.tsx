import Head from '~/components/globals/Head';
import PlaceholderBanner from '~/components/globals/PlaceholderBanner';

import keywords from '~/data/keywords.json';
import Container from '~/layouts/Container';

const { NEXT_PUBLIC_BASE_URL } = process.env;

const Contact = () => {
  return (
    <>
      <Head
        title="SquareOne - Contact us"
        description="Sit excepteur proident est commodo laboris consectetur ea tempor officia."
        keywords={keywords.contact_us}
        url={`${NEXT_PUBLIC_BASE_URL}/contact`}
      />
      <PlaceholderBanner />
      <Container className="py-24">
        <h1 className="font-bold text-align pb-10 text-4xl">Contact us</h1>
        <div className="grid lg:grid-cols-2 gap-10">
          <form>
            <label className="block text-sm mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full mb-8 p-2 border"
              id="name"
              type="text"
              placeholder="Write your name"
            />
            <label className="block text-sm mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              className="w-full mb-8 p-2 border"
              id="phone"
              type="tel"
              placeholder="Write your phone"
            />
            <label className="block text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full mb-8 p-2 border"
              id="email"
              type="email"
              placeholder="Write your email"
            />
            <label className="block text-sm mb-2" htmlFor="content">
              Message
            </label>
            <textarea
              className="w-full mb-8 p-2 border"
              name="content"
              id="content"
              cols={30}
              rows={5}
              placeholder="Enter your message"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-secondary text-primary p-3 rounded transition-all duration-300 hover:bg-primary hover:text-secondary"
            >
              Send message
            </button>
          </form>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.87912145818!2d-56.1691871843327!3d-34.909482880381354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f814c4cec4b67%3A0x10c61042c2b15fc0!2sCo-Work%20Latam-Parque%20Rod%C3%B3!5e0!3m2!1sen!2suy!4v1675892606100!5m2!1sen!2suy"
            width="600"
            height="450"
            loading="lazy"
            className="w-full lg:h-full h-96"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </>
  );
};

export default Contact;
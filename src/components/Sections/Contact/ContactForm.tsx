import {FC, memo, useMemo} from 'react';



const ContactForm: FC = memo(() => {
  useMemo(
    () => ({
      name: ''
    }),
    [],
  );




  return (
    <form action="tel:933861615">
      <p  className="prose leading-6 text-neutral-300">¡Llámanos!</p>
      <br></br>
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        📞 933861615
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;

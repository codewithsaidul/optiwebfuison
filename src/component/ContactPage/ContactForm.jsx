

const ContactForm = () => {
  return (
    <div className="w-full lg:w-2/3">
        <form className="shadow-[0px_4px_10px_0px_rgba(0,0,0,0.3)] dark:shadow-[0px_4px_8px_0px_rgba(220,220,180,0.3)] dark:bg-gray-900 rounded-xl p-8 max-[400px]:p-4 duration-700 hover:duration-700 hover:bg-slate-50 dark:hover:bg-gray-800 group">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                <div className="col-span-2 md:col-span-1 flex flex-col">
                    <label className="text-2xl font-bold font-raleway text-primary dark:text-secondary mb-3">Name</label>
                    <input type="text" className="py-2 px-4 outline-none border-0 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.3)] dark:shadow-[0px_4px_8px_0px_rgba(220,220,180,0.3)] dark:bg-gray-900 rounded-2xl w-full text-text dark:text-slate-300 font-normal text-lg" placeholder="Type Your Name" required />
                </div>
    
                <div className="col-span-2 md:col-span-1 flex flex-col">
                    <label className="text-2xl font-bold font-raleway text-primary dark:text-secondary mb-3">E-mail</label>
                    <input type="email" className="py-2 px-4 outline-none border-0 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.3)] dark:shadow-[0px_4px_8px_0px_rgba(220,220,180,0.3)] dark:bg-gray-900 rounded-2xl w-full text-text dark:text-slate-300 font-normal text-lg" placeholder="Type Your E-mail" required />
                </div>
    
                
                <div className="col-span-2 flex flex-col">
                    <label className="text-2xl font-bold font-raleway text-primary dark:text-secondary mb-3">Subject</label>
                    <input type="text" className="py-2 px-4 outline-none border-0 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.3)] dark:shadow-[0px_4px_8px_0px_rgba(220,220,180,0.3)] dark:bg-gray-900 rounded-2xl w-full text-text dark:text-slate-300 font-normal text-lg" placeholder="Type Your Subject" required />
                </div>
    
                <div className="col-span-2 flex flex-col">
                    <label className="text-2xl font-bold font-raleway text-primary dark:text-secondary mb-3">Message</label>
                    <textarea className="py-2 px-4 outline-none border-0  shadow-[0px_4px_10px_0px_rgba(0,0,0,0.3)] dark:shadow-[0px_4px_8px_0px_rgba(220,220,180,0.3)] dark:bg-gray-900 rounded-2xl text-text dark:text-slate-300 font-normal text-lg w-full g h-40 resize-none" placeholder="Type Your Message"></textarea>
                </div>
            </div>

            {/* Form Data Submit Button */}
            <input type="submit" value="Send  Message" className="py-3 px-6 bg-primary group-hover:bg-primary/90 dark:bg-secondary group-hover:dark:bg-secondary/90 text-xl font-medium font-raleway rounded-2xl w-full text-slate-200 dark:text-text mt-5" />
        </form>
    </div>
  )
}

export default ContactForm
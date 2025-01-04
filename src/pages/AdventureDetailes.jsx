
import { ScrollRestoration, useLoaderData, useLocation, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaRegClock } from "react-icons/fa6";
import { useEffect } from 'react';
const AdventureDetailes = () => {

    const location = useLocation();
    useEffect(() => {
        if (location.pathname.includes(`/adventer/${id}`)) {
            document.title = `${adventure?.adventure_title} | MountainVista Expeditions`;
        }

    }, [location]);



    const { id } = useParams();
    const adventureId = parseInt(id);
    const data = useLoaderData();

    const adventure = data.find(adventure => adventure.id === adventureId)



    const handleExpertTalk = () => {
        const currentDate = new Date();
        const currentTimeHour = currentDate.getHours();

        if (currentTimeHour >= 10 && currentTimeHour < 20) {
            window.open("https://meet.google.com/", "_blank");
        }
        else {

            document.getElementById('my_modal_1').showModal();
        }
    }


    const { adventure_title, image, category_name, location: adventureLocation, duration, adventure_cost, adventure_level, included_items, eco_friendly_features, special_instructions, short_description } = adventure;
    return (
        <>
            <ScrollRestoration></ScrollRestoration>
            <div className=''>
                <header className='bg-slate-100'>
                    <Navbar></Navbar>
                </header>
                <div className='text-center py-10'>
                    <h1 className='text-primary font-semibold mb-2 text-3xl italic'>Adventure Details</h1>
                    <p className='text-secondary text-2xl'>{category_name}</p>
                </div>
                <div className='px-4'>
                    <div className='max-w-5xl mx-auto p-4 grid md:grid-cols-12 gap-5 shadow bg-white border-2 border-[rgba(17, 17, 17, 0.1)] rounded-lg'>
                        <div className='col-span-6'>
                            <img src={image} className='h-full rounded-md w-full object-cover' alt="" />
                        </div>
                        <div className='col-span-6  space-y-3'>
                            <h1 className='text-primary text-2xl font-semibold'>{adventure_title}</h1>
                            <p className='text-secondary text-xl'>{short_description}</p>
                            <p className='text-secondary text-lg'><span className='text-primary text-xl'>Location:</span> {adventureLocation}</p>
                            <p className='text-secondary text-lg'><span className='text-primary text-xl'>Duration:</span> {duration}</p>
                            <p className='text-secondary text-lg'><span className='text-primary text-xl'>Adventure cost:</span> {adventure_cost}</p>
                            <p className='text-secondary text-lg'><span className='text-primary text-xl'>Adventure level:</span> {adventure_level}</p>
                            <h3 className="text-xl font-semibold text-primary mt-4">What's Included</h3>
                            <ul className="list-disc pl-5 text-secondary">
                                {included_items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <h3 className="text-xl font-semibold text-primary mt-4">Eco-Friendly Features</h3>
                            <ul className="list-disc pl-5 text-secondary">
                                {eco_friendly_features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            <h3 className="text-xl font-semibold text-primary mt-4">Special Instructions</h3>
                            <ul className="list-disc pl-5 text-secondary">
                                {special_instructions.map((instruction, index) => (
                                    <li key={index}>{instruction}</li>
                                ))}
                            </ul>

                            <button
                                onClick={handleExpertTalk}
                                className="bg-bgbton text-white text-lg px-4 py-2 rounded-lg shadow"
                            >
                                Talk with Expert
                            </button>
                        </div>
                    </div>
                </div>

                {/* footer */}
                <footer className='pt-10'>
                    <Footer></Footer>
                </footer>



                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <div>
                            <FaRegClock className='mx-auto text-5xl text-bgbton' />
                        </div>
                        <div className='text-center mt-5'>
                            <h3 className="font-bold text-lg"> Consultation Time Unavailable!</h3>
                            <p className="py-4">Thank you for your interest! Our experts are available for consultations between 10:00 AM and 8:00 PM. Please visit during this time or leave a message for further assistance.</p>
                        </div>
                        <div className="modal-action">
                            <form method="dialog" className='w-full'>
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-block bg-bgbton text-white font-semibold text-xl hover:bg-orange-400">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </>
    );
};

export default AdventureDetailes;
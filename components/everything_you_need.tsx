import Link from "next/link";
import Image from "next/image";



export default function EverythingYouNeed () {
    return(
        <section className="grid grid-cols-2">
            <div>
                
                <div>
                <h2 className="text-[1.875rem] text-green">Everything you need to start building</h2>
                <p>We understand the crux of good developer experience while interfacing with an API. Our developer-friendly guide will get you started in no time.</p>
                <Link
                className="w-[7.813rem] text-center py-[0.75rem] bg-green rounded text-white mr-[2.063rem]"
                    href="/"
                >
            Read the docs
          </Link>
                </div>

                <div>


                    
                </div>

            </div>
            <div>2</div>
        </section>
    );
}
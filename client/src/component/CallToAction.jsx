import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Liked Our Post!</h2>
        <p className="text-gray-500 my-2">Keep up Reading !!</p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <Link to="/">Checkout these new posts now.</Link>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google-Blog-Post-Image-6-2x_D6.max-1200x676.format-webp.webp" />
      </div>
    </div>
  );
}

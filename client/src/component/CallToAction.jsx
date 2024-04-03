import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Explore, Learn, and Grow with Our Blog!</h2>
        <p className="text-gray-500 my-2">Checkout these trending news now</p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a href="#" target="_blank" rel="noopener noreferrer">
            Top-10 picks for today.
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google-Blog-Post-Image-6-2x_D6.max-1200x676.format-webp.webp" />
      </div>
    </div>
  );
}

import ContactList from "@/components/contact-list";
import MotionDiv from "@/components/motion-div";

export default function contact() {
  return (
    <section
      className="my-4 mb-28 flex flex-col items-center gap-5 text-center md:mt-8 2xl:scale-125"
      id="contact"
    >
      <MotionDiv>
        <h2>Contact</h2>
      </MotionDiv>
      <MotionDiv>
        <p>
          Want to chat? Just shoot me a dm with a direct question on instagram{" "}
          <br />
          and I'll respond whenever I can. I will ignore all soliciting.
        </p>
      </MotionDiv>
      <ContactList />
    </section>
  );
}

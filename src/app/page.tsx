import BlogPostCard from "./components/BlogPostCard";
import { Button } from "./components/ui/Button";
import { H1,H2,H3,H4 } from "./components/ui/Typography";
import {P} from "./components/ui/Paragraph"

export default function Home() {
  return (
    <main className="flex flex-col space-y-4  mt-20 items-center justify-center ">
      <Button className="">Read More</Button>
      <Button disabled> Read More</Button>
      <P>
        Tailwind CSS color selector lorem ipsum dolor I made my way past the
        breakers a strange calm came over me
      </P>
      <H1>
      Build your component library.
      </H1>
      <H2>
      Build your component library.
      </H2>
      <H3>
      Build your component library.
      </H3>
      <H4>
      Build your component library.
      </H4>
    </main>
  );
}

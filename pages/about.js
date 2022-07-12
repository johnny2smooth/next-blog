import Curve from '../components/curve';
import Layout from '../components/layout';
import StackWrapper from '../components/stackwrapper';
import utility from '../styles/utility.module.css';
import layouts from '../styles/layouts.module.css';

export default function About() {
  return (
    <>
      <Layout>
        <section className={`${utility.section}`}>
          <Curve color="fill-slate-900" />

          <StackWrapper wrapFirst tailwind={'bg-slate-900 text-slate-50'}>
            <h1 className={`${utility.fontLarge}  font-thin`}>Aboooot!</h1>
            <section className={`${layouts.stack}`}>
              <h2 className={`${utility.fontMedium}`}>
                So this will be the title of one topic
              </h2>
              <p className={`${utility.fontSmall}`}>
                This will be the eloquent, poetic description
              </p>
              <p>
                People love pictures and videos. Why do I not introduced myself
                with both? So, besides from being a picture or video box right
                here, I also want these components to be the bigger part of a
                sidebar thing. Each side thing will alternate which side the
                image / video is on, but will always end up below the writting
                when the screen size shrinks. That way the text never gets too
                long, nor the frame gets too small
              </p>
            </section>
            <section className={`${layouts.stack}`}>
              <h2 className={`${utility.fontMedium}`}>
                This will be another title
              </h2>
              <p className={`${utility.fontSmall} max-w-prose`}>
                This will be the eloquent, poetic description
              </p>
              <p>
                People love pictures and videos. Why do I not introduced myself
                with both? So, besides from being a picture or video box right
                here, I also want these components to be the bigger part of a
                sidebar thing. Each side thing will alternate which side the
                image / video is on, but will always end up below the writting
                when the screen size shrinks. That way the text never gets too
                long, nor the frame gets too small
              </p>
            </section>
          </StackWrapper>
          <Curve color="fill-slate-900" />
        </section>
      </Layout>
    </>
  );
}

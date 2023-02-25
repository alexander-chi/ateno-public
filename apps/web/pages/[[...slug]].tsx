import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Page({ story}) {


  story = useStoryblokState(story);

  return (
    <StoryblokComponent blok={story.content} />
  );
}

export async function getStaticProps({
  params,
}) {
  let slug = params.slug ? params.slug.join("/") : "home";

  let { data } = await getStoryblokApi().get(`cdn/stories/${slug}`);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  let { data } = await getStoryblokApi().get("cdn/links/");


  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder) {
      return;
    }

    // get array for slug because of catch all
    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");
    if (slug === "home") splittedSlug = false;

    paths.push({ params: { slug: splittedSlug }});
  });

  return {
    paths: paths,
    fallback: false,
  };
}

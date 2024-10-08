import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ArticleInfiniteList } from "./ArticleInfiniteList";

export default {
  title: "2_pages/ArticlesPage/ArticleInfiniteList",
  component: ArticleInfiniteList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => <ArticleInfiniteList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

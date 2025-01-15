import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import Ping from "./Ping";
import { client } from "@/sanity/lib/client";

const View = async ({ id }: { id: string }) => {
    const result = await client.withConfig({ useCdn: false }).fetch(STARTUP_VIEWS_QUERY, { id });
    const { views: totalViews = 0 } = result;

    // todo: update the number of views whenever someone sees this post
    return (
        <div className="view-container">
            <div className="absolute -top-2 -right-2">
                <Ping />
            </div>

            <p className="view-text">
                <span className="font-black">Views: {totalViews}</span>
            </p>
        </div>
    );
};
export default View;

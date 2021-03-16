import { getSitemapPagesXMLPage, GetSitemapAdviceGuidesPages } from "business-logic/sitemapService";
import { GetServerSideProps } from "next";
import { SitemapPageItem } from "types/SitemapPageItem";
import moment from "moment";
import SitemapItemChangeFrequencies from "enums/SitemapItemChangeFrequencies";

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
    
    if (!req || !res) {
        return {
          props: {},
        };
    }

    const items:Array<SitemapPageItem> = await GetSitemapAdviceGuidesPages(false);
    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.write(SitemapAdvicePages(items));
    res.end();
}

const SitemapAdvicePages = (items) => {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <?xml-stylesheet type="text/xsl" href="sitemap1.xsl"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${items.map(function(item){  
            return `
                <url>
                    <loc>${`${item.url}`}</loc>
                    <lastmod>${`${item.modifiedOn}`}</lastmod> 
                    <changefreq>${SitemapItemChangeFrequencies[item.changeFrequency]}</changefreq> 
                    <priority>${item.priority / 10}</priority>                          
                </url>`
        })}
    </urlset>`
}

export default SitemapAdvicePages;

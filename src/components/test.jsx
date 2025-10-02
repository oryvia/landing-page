import FeatureShowcase from "./FeatureShowcase";

const wallpickrFeatures = [
    { name: "Wallpaper Gallery", image: "/images/s3.svg" },
    { name: "Search Functionality", image: "/images/search.png" },
    { name: "Responsive Design", image: "/images/responsive.png" },
    { name: "Download Options (multiple resolutions)", image: "/images/download.png" },
    { name: "Category Filters", image: "/images/categories.png" },
    { name: "Optimized Performance", image: "/images/performance.png" },
];

export default function CaseStudyWallpickr() {
    return (
        <div>
            <FeatureShowcase
                features={wallpickrFeatures}
                defaultImage="/images/default.png"
                title="WallPickr – Key Features"
            />
        </div>
    );
}

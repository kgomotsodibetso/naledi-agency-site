import { Footer } from "@/components/landing/footer"

const PlaceholderContent = ({ title, lastUpdated }: { title: string; lastUpdated: string; }) => (
    <div className="animate-fade-in-up bg-white">
        <div className="container mx-auto px-6 py-20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-sans font-bold text-midnight-blue">{title}</h1>
                    <p className="text-slate-500 mt-2">Last Updated: {lastUpdated}</p>
                </div>
                <div className="text-slate-700 font-body space-y-6 text-lg leading-relaxed">
                    <h2 className="text-2xl font-sans font-bold text-midnight-blue mt-8 mb-3">1. Introduction</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                    </p>
                    <p>
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.
                    </p>
                    <h2 className="text-2xl font-sans font-bold text-midnight-blue mt-8 mb-3">2. Information We Collect</h2>
                     <p>
                        Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.
                    </p>
                    <h2 className="text-2xl font-sans font-bold text-midnight-blue mt-8 mb-3">3. How We Use Your Information</h2>
                    <p>
                        Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor.
                    </p>
                    <h2 className="text-2xl font-sans font-bold text-midnight-blue mt-8 mb-3">4. Your Rights</h2>
                     <p>
                        Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper.
                    </p>
                    <h2 className="text-2xl font-sans font-bold text-midnight-blue mt-8 mb-3">5. Contact Us</h2>
                    <p>
                        Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante.
                    </p>
                </div>
            </div>
        </div>
    </div>
);


export default function PrivacyPolicyPage() {
    return (
        <>
            <main>
                <PlaceholderContent title="Privacy Policy" lastUpdated={new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} />
            </main>
            <Footer />
        </>
    )
};

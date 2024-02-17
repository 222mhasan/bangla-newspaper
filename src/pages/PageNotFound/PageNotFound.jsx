import not_found_page from '../../../src/assets/not_found_page.jpg'

const PageNotFound = () => {
    return (
        <div>
            <img src={not_found_page} alt="not-found-page" className='max-w-3xl mx-auto' />
            {/* <h1 className="mt-20 text-6xl text-center">404 Page Not Found</h1> */}
        </div>
    );
};

export default PageNotFound;
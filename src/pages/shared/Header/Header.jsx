import moment from 'moment';

const Header = () => {
    return (
        <div className="pt-6 text-center">
            <h2 className="font-dancingScript text-6xl font-extrabold">The Bangla News</h2>
            <p className="mt-3">we are determined to express the truth..</p>
            <p className='text-lg'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;
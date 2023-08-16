import '../styles/footer.scss';

const Footer = () => {
    return <div className="footer">
       
        <div className="icons">
            <div className="icon-1">
                <img src="https://www.iconbolt.com/iconsets/remix-icon-fill/facebook.svg" alt="facebook" />
            </div>
            <div className="icon-2">
                <img src="https://www.iconbolt.com/iconsets/atlas-icons/instagram.svg" alt="instagram" />
            </div>
            <div className="icon-3">
                <img src="https://www.iconbolt.com/iconsets/akar-icons/twitter-fill.svg" alt="twiter" />
            </div>
        </div>
        <div className="image">
            <h3>Food is Health...</h3>
            <img src="https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-jumbo.jpg?quality=75&auto=web" alt="foods" />
        </div>
    </div>;
}
 
export default Footer;
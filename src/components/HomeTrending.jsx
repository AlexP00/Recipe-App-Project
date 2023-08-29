import { Link } from "react-router-dom";
import '../styles/hometrending.scss';


const HomeTrending = () => {
    return (
        <main className="trend-container">
            <h1>Trending Dishes in the world</h1>
            
            <div className="dish">
                <div className="image">
                    <img src="https://dish.co.nz/assets/Uploads/Dish_JUN22_32893-min__FillWzg1MCwxMTc0XQ.jpg" alt="dish" />
                </div>
                <div className="info">
                    <h2>BRAISED NUTTY SATAY CHICKEN</h2>
                    <p className="method">Method:</p>
                    <p>Combine all the spices and salt in a large bowl. Add the 
                    chicken and toss so each piece is well coated. Heat the oil in
                     a large ovenproof frying pan over a medium heat and quickly brown the 
                     chicken on both sides. Transfer to a plate. Combine all the remaining 
                     ingredients except the chillies, lemongrass and peanuts in a large bowl. 
                     Tip into the frying pan and bring to the boil, crushing the peanut butter
                      with a fork to amalgamate. Add the chicken and juices to the pan and turn to
                       coat in the sauce. Nestle in the chillies and lemongrass. Bake for 35-40 minutes
                    , or until the chicken is fully cooked. Top with the peanuts to serve.
                    </p>
                    
                </div>
            </div>
            <div className="dish">
            <div className="info">
                    <h2>BISTRO CHICKEN WITH BACON</h2>
                    <p className="method">Method:</p>
                    <p>
                    Heat the olive oil and butter in a sauté pan over 
                    a medium heat. Season the chicken with salt and 
                    pepper and cook, skin side down, for 10 minutes.
                     Turn over and cook for 2 minutes. Transfer to a 
                     plate and set aside.
                     Add the onion, bacon, tarragon, garlic and 
                     a pinch of salt to the pan. Cook until the onions are soft.
                     Add the stock and bring to a boil. Add the chicken 
                     with any juices, cover and cook over a gentle heat 
                    until the chicken is fully cooked, about 15 minutes.
                     Whisk together the mustards and crème fraîche, stir 
                    into the pan and simmer for 5 minutes. Scatter over the parsley.
                    </p>
                </div>
                <div className="image">
                    <img src="https://dish.co.nz/assets/media/2021/06/03/Dish-Food-Fast-March-2021-Final-Selects-11-min__FillWzg1MCwxMTc0XQ.jpg" alt="dish" />
                </div>
            </div>
            <div className="dish">
                <div className="image">
                    <img src="https://dish.co.nz/assets/Uploads/Dish-Choc-Ginger-Caramel-Greenlea-and-Trelise-June-2021-Final-Selects-11__FillWzg1MCwxMTc0XQ.jpg" alt="dish" />
                </div>
                <div className="info">
                    <h2>GINGERBREAD WALNUT PUDDING </h2>
                    <p className="method">Method:</p>
                    <p>
                    EQUIPMENT: Grease a 20cm x 30cm deep baking dish 
                    (or equivalent).
                    Preheat the oven to 170°C regular bake.
                    Heat the butter and golden syrup together in a 
                    saucepan and whisk to combine.
                    Sift the flours, baking soda and spices into a 
                    large bowl. Add the walnuts and caster sugar.
                     Whisk the egg and milk together, then add to the 
                     dry ingredients along with the butter mixture.
                      Fold everything together and pour into the prepared
                       baking dish.
                    Bake for 35 minutes, or until the middle bounces
                     back when lightly pressed. Serve with the caramel 
                     sauce.
                    </p>
                </div>
            </div>
            <div className="dish">
            <div className="info">
                    <h2>BEEF MASSAMAN</h2>
                    <p className="method">Method:</p>
                    <p>
                    SPICES: Add all the spices to a dry frying pan and toast for
                    a few minutes until fragrant. Place in a small food processor 
                    and whizz or grind in a mortar and pestle.
                    PASTE: Add the paste ingredients to the food processor and whizz together.
                    CURRY: Bring the coconut milk to a boil in a large heavy-based pot
                    , then simmer until the oil has separated and is floating on the top.
                     Add the curry paste and cook for 3-4 minutes. Stir in the shrimp 
                     paste, water, lemongrass, star anise and bay leaf. Add the beef,
                      cover and simmer gently for 3½ hours. Remove the lid and simmer 
                      for a further ¾ hour. Add the potatoes and simmer for a final
                       20 minutes until they are cooked through.
                    </p>
                </div>
                <div className="image">
                    <img src="https://dish.co.nz/assets/media/images/beef-massaman__FillWzg1MCwxMTc0XQ.png" alt="dish" />
                </div>
            </div>
            <div className="dish">
                <div className="image">
                    <img src="https://dish.co.nz/assets/media/images/basque-lemon-cheesecake__FillWzg1MCwxMTc0XQ.png" alt="dish" />
                </div>
                <div className="info">
                    <h2>BASQUE LEMON CHEESECAKE</h2>
                    <p className="method">Method:</p>
                    <p>
                    Beat the cream cheese, sugar and zest together until 
                    completely smooth and the sugar has dissolved. Test by
                     rubbing a little between your fingertips. Beat in the 
                     eggs, one at a time, scraping down the bowl so everything
                      is combined. Add the cream, vanilla and salt and beat on
                    low to combine. Sieve over the flour and beat again for
                    about 20 seconds until smooth.
                    Pour the batter into the prepared tin and bake on the
                     middle shelf of the oven for 30-40 minutes until it’s 
                     dark brown on top and puffed up but still has a wobble
                      in the centre. Leave to cool completely in the tin.
                       The cheesecake with fall quite dramatically as it cools.
                    </p>
                </div>
            </div>
        </main>
    )
}
 
export default HomeTrending;
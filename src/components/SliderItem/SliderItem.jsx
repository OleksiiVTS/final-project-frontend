import { SliderItemStyled, UserComment, UserInfo, UserName, UserPhoto, UserAvatar } from "./SliderItem.styled";
import StarRatings from 'react-star-ratings';


const SliderItem = ({ comment, name, rating, avatar }) => {
    return (
        <SliderItemStyled>
            <UserInfo>
                {avatar ? <UserPhoto src={avatar} alt={`Photo of ${name}`} />
                    : <UserAvatar>{name.slice(0,1)}
                      </UserAvatar>}
                <div>
                    <UserName>{name}</UserName>
                    <StarRatings
                        rating={rating}
                        starRatedColor="#FFAC33"
                        numberOfStars={5}
                        name='rating'
                        starDimension="14px"
                        starSpacing="5px"
                        svgIconPath="M10.8241 14C10.6578 14 10.4923 13.9466 10.3498 13.8403L7.00009 11.3293L3.65039 13.8403C3.51161 13.9447 3.34483 14.0005 3.17386 13.9999C3.00289 13.9993 2.83648 13.9422 2.69839 13.8369C2.56018 13.7321 2.45708 13.5845 2.40378 13.4149C2.35048 13.2454 2.34969 13.0626 2.40151 12.8925L3.6508 8.67793L0.331167 6.23275C0.193589 6.12662 0.0914162 5.97796 0.0390997 5.8078C-0.0132167 5.63764 -0.0130282 5.45459 0.0396388 5.28455C0.0927213 5.11492 0.195461 4.96702 0.333337 4.86175C0.471213 4.75648 0.637253 4.69916 0.807989 4.6979L4.91945 4.69144L6.22844 0.58142C6.28246 0.412106 6.38607 0.264848 6.5246 0.160499C6.66312 0.0561503 6.82954 0 7.00029 0C7.17104 0 7.33746 0.0561503 7.47599 0.160499C7.61451 0.264848 7.71812 0.412106 7.77214 0.58142L9.0589 4.69144L13.1914 4.6979C13.3623 4.69891 13.5286 4.75619 13.6666 4.86162C13.8046 4.96705 13.9073 5.11526 13.9602 5.2852C14.013 5.45513 14.0133 5.63815 13.9609 5.80825C13.9086 5.97835 13.8063 6.12689 13.6686 6.23275L10.349 8.67793L11.5982 12.8925C11.6502 13.0625 11.6495 13.2453 11.5963 13.4149C11.543 13.5844 11.44 13.7321 11.3018 13.8369C11.1633 13.9431 10.9959 14.0002 10.8241 14Z"
                        svgIconViewBox="0 0 14 14"
                    />
                </div>
            </UserInfo>
            <UserComment>{comment}</UserComment>
        </SliderItemStyled>
    )
}

export default SliderItem;

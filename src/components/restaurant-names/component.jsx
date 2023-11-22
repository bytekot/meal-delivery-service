export const RestaurantNames = ({ names }) => (
    <div>
        {names.map((name, index) => 
            <span key={index}>{name}</span>
        )}
    </div>
)

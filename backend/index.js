const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const appPort = 8080;

const rentableCars = [
    {
        id: 1,
        carName: 'Ford Mustang Mk1',
        carBrandAndModel: 'Ford Mustang Mk1',
        modelYear: '1965',
        color: 'red',
        engine: 'V8, 4736cc, 225hp',
        VIN: '5F09A250001',
        isRented: false,
        imgText: `D'ya like classic American cars? Ride this '65 Mk1 Mustang!`,
        imgUrl: '/img/mustang.jpg',
        imgAlt: 'A red 1965 Ford Mustang car',
        rentingPrice: 200
      },
      {
        id: 2,
        carName: 'Dodge Viper GTS',
        carBrandAndModel: 'Dodge Viper GTS (Mk2, SR II)',
        modelYear: '1996',
        color: 'red',
        engine: 'V10, 7994cc, 456hp',
        VIN: '1B3ED6BE5TV563423',
        isRented: false,
        imgText: `Wanna ride a real American V10 gasoline-eater beast? Don't hesitate, rent this red Viper now!`,
        imgUrl: '/img/vipergts.jpg',
        imgAlt: 'A red Dodge Viper GTS car',
        rentingPrice: 300
      },
      {
        id: 3,
        carName: 'Mercedes-Benz 560SEL',
        carBrandAndModel: 'Mercedes-Benz 560SEL (W126)',
        modelYear: '1989',
        color: 'black',
        engine: 'V8, 5547cc, 299hp',
        VIN: 'WDB1260391A522052',
        isRented: false,
        imgText: `German luxury and comfort at the top. Try driving a Mercedes limo!`,
        imgUrl: '/img/mercedes560sel.jpg',
        imgAlt: 'A black Mercedes limousine car',
        rentingPrice: 300
      },
      {
        id: 4,
        carName: 'Porsche 911 Turbo',
        carBrandAndModel: 'Porsche 911 Turbo (993)',
        modelYear: '1996',
        color: 'lightgrey',
        engine: 'boxer-6, 3600cc, 450hp',
        VIN: 'T99TS372094',
        isRented: false,
        imgText: `If you like Porsche cars, you cannot miss this beauty. Call for the 911!`,
        imgUrl: '/img/porsche911.jpg',
        imgAlt: 'A grey Porsche 911 car',
        rentingPrice: 300
      },
      {
        id: 5,
        carName: 'Alfa Romeo 1750 Spider',
        carBrandAndModel: 'Alfa Romeo 1750 Spider Veloce (Mk1, 105)',
        modelYear: '1969',
        color: 'grey',
        engine: 'inline-4, 1779cc, 116hp',
        VIN: 'AR147233',
        isRented: true,
        imgText: `Buongiorno! Wanna have a retro Italian feeling? Try this real classic '69 Alfa!`,
        imgUrl: '/img/alfaspider.jpg',
        imgAlt: 'A grey Alfa Romeo 1750 Spider car',
        rentingPrice: 200
      },
      {
        id: 6,
        carName: 'Trabant 601',
        carBrandAndModel: 'Trabant 601 S Limousine',
        modelYear: '1989',
        color: 'green',
        engine: 'inline-2, 594cc, 26hp',
        VIN: 'SNTN411STL9123456',
        isRented: false,
        imgText: `Retro experience from the former Eastern Bloc. Try this two-stroke legend, a common partner of the '70s & '80s!`,
        imgUrl: '/img/trabant601.JPG',
        imgAlt: 'A green Trabant 601 car',
        rentingPrice: 100
      }

];

app.get('/api/v1/car-renting/port', (req, res) => {
    res.status(200).send(`App is running on this port: ${appPort}`);
});

// összes autó lekérése:
app.get('/api/v1/car-renting/cars', (req, res) => {
    // checkDetailsOfRequest({ req, res });

    res.status(200).send(rentableCars);
});

// bérelhető autók lekérése:
app.get('/api/v1/car-renting/cars/rentable', (req, res) => {
    res.status(200).send(rentableCars.filter((car) => !car.isRented));
});

// autó lekérése id alapján:
app.get('/api/v1/car-renting/cars/:id', (req, res) => {
    const car = rentableCars.find((car) => car.id === parseInt(req.params.id));
    car
    ? res.status(200).send(car)
    : res.status(404).send({
        message: `No car with given id: ${req.params.id}`,
        countryCode: ['HU, ENG'],
    });
});

// autó hozzáadása:
app.post('/api/v1/car-renting/cars', (req, res) => {
    checkDetailsOfRequest({ req, res, newCar: true });

    const newCar = {
        id: rentableCars.length + 1,
        ...req.body,
    };

    rentableCars.push(newCar);

    res.status(200).send('Car has been added!');
});

// autó módosítása (nem akarja kiválasztani)
app.put('/api/v1/car-renting/cars/:id', (req, res) => {
    // checkDetailsOfRequest({ req, res });
    // const index = getCar({ id: req.params.id });

    const { car, index } = checkDetailsOfRequest({ req, res, newCar: false });

    rentableCars[index] = {
        ...car,
        ...req.body,
    };
   
    res.status(200).send('Car was updated successfully!');
});

// autó törlése (nem akarja kiválasztani)
app.delete('/api/v1/car-renting/cars/:id', (req, res) => {
    console.log('backend: ', req.params.id)

    // checkDetailsOfRequest({ req, res });
    // const index = getCar({ id: req.params.id })

    const { index } = checkDetailsOfRequest({ req, res, newCar: false });

    console.log('check details passed');

    rentableCars.splice(index, 1);
    
    res.status(200).send(`Car with id ${req.params.id} was deleted successfully!`);
});

// keresés típus alapján (még nincs kipróbálva)
app.get('/api/v1/car-renting/cars/search', (req, res) => {
    const queryKey = Object.keys(req.query);
    checkDetailsOfRequest({ req, res });

    !isSearchKeyCorrect({ searchKey: queryKey[0] }) && res.status(400).send('Search with given key cannot be fulfilled!');

    const searchResult = rentableCars.find((car) => car.carBrandAndModel === Object.values(req.query)[0]);

    res.status(200).send(searchResult);
});

const checkDetailsOfRequest = ({ req, res, newCar }) => {
    const car = rentableCars.find((car) => car.id === req.params.id);
    const index = car && rentableCars.indexOf(car);

    if(!newCar) {
        if(!car) {
            res.status(404).send('Car with the given id was not found!');
        }

        if(car.isRented) {
            res.status(400).send('Car with the given id has already been rented!');
        }
    }
    
    return { car, index };
};

/*
function getCar({ id }) {
    const car = rentableCars.find((car) => car.id === parseInt(id));
    return rentableCars.indexOf(car);
}
*/

function isSearchKeyCorrect({ searchKey }) {
    const correctValue = "name";
    return correctValue === searchKey;
}

app.listen(appPort, () => console.log(`App is listening on port ${appPort}`));

import React  , {FC, useEffect} from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { TextField , Typography , Button , MenuItem } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import { userData, userDetails } from "../database/server";

const UserDetailPage:React.FC=()=>{

    type UserInfoType = {
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        nationalID: string;
        age: string;
        country: string;
        city: string;
        [key: string]: string; 
    };

    // let UserData:userDetails= await userData.findOne({
    //     email: interaction.user.email;
    // })

  

    const [userInfo , setUserInfo]=useState<UserInfoType>({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber:'',
        nationalID:'',
        age:'',
        country:'',
        city:''
    })

    const [error , setError]=useState('');
    const [phoneError , setPhoneError] = useState('');
    const [nationalIDError , setNationalIDError] = useState('');
    const [proceed , setProceed]=useState(false);
    const [countries , setCountries] = useState<string[]>();
    const [cities , setCities] = useState<string[]>();

//This way if we are using APIs
    /*useEffect(()=>{
        const fetchCountries = async()=>{
            try{
                const response = await fetch('https://api.worldbank.org/v2/country?format=json');
                const data = await response.json();
                const countryName = data[1].map((country:any)=>country.name);
                setCountries(countryName);
            }
            catch(error){
                console.log('Failed to fetch countries');
                setError('Error while fetching countries , please try again later');
            }

            fetchCountries();
        }
    },[])

    useEffect(()=>{
        const fetchCities=async()=>{
            if(userInfo.country){
                try{
                    const response = await axios.get(`https://api.teleport.org/api/countries/iso_alpha2:${userInfo.country}/cities/`);
                    const cityName = response.data._embedded["city:search-results"].map((city:any)=>city.matching_full_name);
                    setCities(cityName);
                }
                catch(error){
                    console.log('Failed to fetch cities');
                    setError('Error while fetching cities , please try again later');
                }
            }
        }

        fetchCities();
    },[userInfo.country])
    */

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name , value} = e.target;
        if (name === 'nationalID' && value.length !== 14) {
            setNationalIDError('National ID must be exactly 14 digits');
        } else if (name === 'phoneNumber' && value.length !== 11) {
            setPhoneError('Phone number must be exactly 11 digits');
        }
        else {
            setError('');
            setNationalIDError('');
            setPhoneError('');
        }
    
        setUserInfo(prevState=>({...prevState , [name]:value}));
    }

    const submitHandler=async()=>{
        try{
            const response = await axios.post('http://localhost:3000/api/users', userInfo);
            console.log("User submitted data:",response.data);
            setProceed(true);
            setError('');
        }
        catch(error){
            //@ts-ignore
            console.log("unable to create user" + error.message);
            //setError("You have entered a wrong data");
        }
        if(Object.values(userInfo).some(value=>value==='')){ 
            //alternative: userInfo.firstName===''|| userInfo.lastName===''||userInfo.email===''|| userInfo.country===''
                        //|| userInfo.city===''|| userInfo.phoneNumber===''|| userInfo.nationalID===''|| userInfo.age===''
            setProceed(false);
            setError('There is an incompelete field');
        }
        else{
            setProceed(true);
            setError('');
        }
    }

    const capitalizeFirstLetter=(first:string)=>{
        return first.replace(/^\w/ ,char=>char.toUpperCase());
    }
    
    const resetForm=() => setUserInfo({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        nationalID: '',
        age: '',
        country: '',
        city: ''

    })

    //all countries in the world
    const countriesList = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. 'Swaziland')", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ];
    
    //some cities in each country in the world
    const citiesList: Record<string, string[]> = {
        'Afghanistan': ['Kabul', 'Kandahar', 'Herat', 'Mazar-i-Sharif', 'Jalalabad'],
        'Albania': ['Tirana', 'Durrës', 'Vlorë', 'Shkodër', 'Fier'],
        'Algeria': ['Algiers', 'Oran', 'Constantine', 'Annaba', 'Blida'],
        'Andorra': ['Andorra la Vella', 'Escaldes-Engordany', 'Encamp', 'Sant Julià de Lòria', 'La Massana'],
        'Angola': ['Luanda', 'Huambo', 'Lobito', 'Benguela', 'Kuito'],
        'Antigua and Barbuda': ['St. John\'s', 'All Saints', 'Liberta', 'Bolands', 'Potters Village'],
        'Argentina': ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza', 'San Miguel de Tucumán'],
        'Armenia': ['Yerevan', 'Gyumri', 'Vanadzor', 'Vagharshapat', 'Hrazdan'],
        'Australia': ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
        'Austria': ['Vienna', 'Graz', 'Linz', 'Salzburg', 'Innsbruck'],
        'Azerbaijan': ['Baku', 'Ganja', 'Sumqayit', 'Mingachevir', 'Lankaran'],
        'Bahamas': ['Nassau', 'Lucaya', 'Freeport', 'West End', 'Coopers Town'],
        'Bahrain': ['Manama', 'Riffa', 'Muharraq', 'Hamad Town', 'A\'ali'],
        'Bangladesh': ['Dhaka', 'Chittagong', 'Khulna', 'Rajshahi', 'Comilla'],
        'Barbados': ['Bridgetown', 'Speightstown', 'Oistins', 'Bathsheba', 'Holetown'],
        'Belarus': ['Minsk', 'Gomel', 'Mogilev', 'Vitebsk', 'Hrodna'],
        'Belgium': ['Brussels', 'Antwerp', 'Ghent', 'Charleroi', 'Liège'],
        'Belize': ['Belmopan', 'Belize City', 'San Ignacio', 'Orange Walk', 'Dangriga'],
        'Benin': ['Porto-Novo', 'Cotonou', 'Parakou', 'Djougou', 'Bohicon'],
        'Bhutan': ['Thimphu', 'Phuntsholing', 'Punakha', 'Jakar', 'Samdrup Jongkhar'],
        'Bolivia': ['Sucre', 'La Paz', 'Cochabamba', 'Oruro', 'Santa Cruz de la Sierra'],
        'Bosnia and Herzegovina': ['Sarajevo', 'Banja Luka', 'Tuzla', 'Zenica', 'Mostar'],
        'Botswana': ['Gaborone', 'Francistown', 'Molepolole', 'Serowe', 'Selibe Phikwe'],
        'Brazil': ['Brasília', 'São Paulo', 'Rio de Janeiro', 'Salvador', 'Fortaleza'],
        'Brunei': ['Bandar Seri Begawan', 'Kuala Belait', 'Seria', 'Tutong', 'Bangar'],
        'Bulgaria': ['Sofia', 'Plovdiv', 'Varna', 'Burgas', 'Ruse'],
        'Burkina Faso': ['Ouagadougou', 'Bobo-Dioulasso', 'Koudougou', 'Ouahigouya', 'Banfora'],
        'Burundi': ['Bujumbura', 'Gitega', 'Ngozi', 'Ruyigi', 'Muyinga'],
        'Cabo Verde': ['Praia', 'Mindelo', 'Santa Maria', 'Cova Figueira', 'Espargos'],
        'Cambodia': ['Phnom Penh', 'Siem Reap', 'Sihanoukville', 'Battambang', 'Kampong Cham'],
        'Cameroon': ['Yaoundé', 'Douala', 'Garoua', 'Kousséri', 'Bamenda'],
        'Canada': ['Ottawa', 'Toronto', 'Montreal', 'Vancouver', 'Calgary'],
        'Central African Republic': ['Bangui', 'Bimbo', 'Mbaïki', 'Berbérati', 'Kaga-Bandoro'],
        'Chad': ['N\'Djamena', 'Moundou', 'Sarh', 'Abéché', 'Kélo'],
        'Chile': ['Santiago', 'Puente Alto', 'Antofagasta', 'Viña del Mar', 'Valparaíso'],
        'China': ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Tianjin'],
        'Colombia': ['Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena'],
        'Comoros': ['Moroni', 'Moutsamoudou', 'Fomboni', 'Domoni', 'Tsémbéhou'],
        'Congo': ['Brazzaville', 'Pointe-Noire', 'Dolisie', 'Nkayi', 'Kindamba'],
        'Costa Rica': ['San José', 'Puerto Limón', 'Liberia', 'Puntarenas', 'Alajuela'],
        'Croatia': ['Zagreb', 'Split', 'Rijeka', 'Osijek', 'Zadar'],
        'Cuba': ['Havana', 'Santiago de Cuba', 'Camagüey', 'Holguín', 'Guantánamo'],
        'Cyprus': ['Nicosia', 'Limassol', 'Larnaca', 'Famagusta', 'Paphos'],
        'Czech Republic': ['Prague', 'Brno', 'Ostrava', 'Plzeň', 'Liberec'],
        'Democratic Republic of the Congo': ['Kinshasa', 'Lubumbashi', 'Mbuji-Mayi', 'Kananga', 'Kisangani'],
        'Denmark': ['Copenhagen', 'Aarhus', 'Odense', 'Aalborg', 'Esbjerg'],
        'Djibouti': ['Djibouti City', 'Ali Sabieh', 'Tadjoura', 'Obock', 'Dikhil'],
        'Dominica': ['Roseau', 'Portsmouth', 'Marigot', 'Berekua', 'Mahaut'],
        'Dominican Republic': ['Santo Domingo', 'Santiago de los Caballeros', 'Santo Domingo Oeste', 'San Pedro de Macorís', 'La Romana'],
        'East Timor': ['Dili', 'Same', 'Lospalos', 'Maliana', 'Suai'],
        'Ecuador': ['Quito', 'Guayaquil', 'Cuenca', 'Santo Domingo de los Colorados', 'Machala'],
        'Egypt': ['Cairo', 'Alexandria', 'Giza', 'Shubra El-Kheima', 'Port Said'],
        'El Salvador': ['San Salvador', 'Santa Ana', 'San Miguel', 'Mejicanos', 'Soyapango'],
        'Equatorial Guinea': ['Malabo', 'Bata', 'Ebebiyin', 'Aconibe', 'Anisoc'],
        'Eritrea': ['Asmara', 'Keren', 'Massawa', 'Assab', 'Mendefera'],
        'Estonia': ['Tallinn', 'Tartu', 'Narva', 'Pärnu', 'Kohtla-Järve'],
        'Eswatini': ['Mbabane', 'Manzini', 'Lobamba', 'Siteki', 'Big Bend'],
        'Ethiopia': ['Addis Ababa', 'Dire Dawa', 'Mekelle', 'Gondar', 'Adama'],
        'Fiji': ['Suva', 'Lautoka', 'Nadi', 'Labasa', 'Ba'],
        'Finland': ['Helsinki', 'Espoo', 'Tampere', 'Vantaa', 'Oulu'],
        'France': ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice'],
        'Gabon': ['Libreville', 'Port-Gentil', 'Franceville', 'Oyem', 'Moanda'],
        'Gambia': ['Banjul', 'Serekunda', 'Brikama', 'Bakau', 'Banjulinding'],
        'Georgia': ['Tbilisi', 'Kutaisi', 'Batumi', 'Rustavi', 'Zugdidi'],
        'Germany': ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt'],
        'Ghana': ['Accra', 'Kumasi', 'Tamale', 'Takoradi', 'Atsiaman'],
        'Greece': ['Athens', 'Thessaloniki', 'Patras', 'Heraklion', 'Larissa'],
        'Grenada': ['St. George\'s', 'Gouyave', 'Grenville', 'Victoria', 'Sauteurs'],
        'Guatemala': ['Guatemala City', 'Mixco', 'Villa Nueva', 'Petapa', 'San Juan Sacatepéquez'],
        'Guinea': ['Conakry', 'Nzérékoré', 'Kindia', 'Kankan', 'Kissidougou'],
        'Guinea-Bissau': ['Bissau', 'Bafatá', 'Gabú', 'Bissora', 'Cacheu'],
        'Guyana': ['Georgetown', 'Linden', 'New Amsterdam', 'Bartica', 'Corriverton'],
        'Haiti': ['Port-au-Prince', 'Cap-Haïtien', 'Delmas', 'Pétion-Ville', 'Port-de-Paix'],
        'Honduras': ['Tegucigalpa', 'San Pedro Sula', 'Choloma', 'La Ceiba', 'El Progreso'],
        'Hungary': ['Budapest', 'Debrecen', 'Szeged', 'Miskolc', 'Pécs'],
        'Iceland': ['Reykjavik', 'Kópavogur', 'Hafnarfjörður', 'Akureyri', 'Reykjanesbær'],
        'India': ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad'],
        'Indonesia': ['Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Semarang'],
        'Iran': ['Tehran', 'Mashhad', 'Isfahan', 'Karaj', 'Tabriz'],
        'Iraq': ['Baghdad', 'Basra', 'Sulaymaniyah', 'Erbil', 'Najaf'],
        'Ireland': ['Dublin', 'Cork', 'Limerick', 'Galway', 'Waterford'],
        'Italy': ['Rome', 'Milan', 'Naples', 'Turin', 'Palermo'],
        'Jamaica': ['Kingston', 'New Kingston', 'Spanish Town', 'Portmore', 'Montego Bay'],
        'Japan': ['Tokyo', 'Yokohama', 'Osaka', 'Nagoya', 'Sapporo'],
        'Jordan': ['Amman', 'Zarqa', 'Irbid', 'Russeifa', 'Al-Quwaysimah'],
        'Kazakhstan': ['Nur-Sultan', 'Almaty', 'Karagandy', 'Shymkent', 'Taraz'],
        'Kenya': ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret'],
        'Kiribati': ['South Tarawa', 'Betio Village', 'Bairiki Village', 'Bikenibeu Village', 'Eita Village'],
        'Kuwait': ['Kuwait City', 'Al Ahmadi', 'Hawalli', 'As Salimiyah', 'Sabah as Salim'],
        'Kyrgyzstan': ['Bishkek', 'Osh', 'Jalal-Abad', 'Karakol', 'Tokmok'],
        'Laos': ['Vientiane', 'Pakse', 'Savannakhet', 'Luang Prabang', 'Xam Neua'],
        'Latvia': ['Riga', 'Daugavpils', 'Liepāja', 'Jelgava', 'Jūrmala'],
        'Lebanon': ['Beirut', 'Tripoli', 'Sidon', 'Tyre', 'Nabatieh'],
        'Lesotho': ['Maseru', 'Teyateyaneng', 'Mafeteng', 'Hlotse', 'Mohale\'s Hoek'],
        'Liberia': ['Monrovia', 'Gbarnga', 'Kakata', 'Bensonville', 'Harper'],
        'Libya': ['Tripoli', 'Benghazi', 'Misrata', 'Tarhuna', 'Zawiya'],
        'Liechtenstein': ['Vaduz', 'Schaan', 'Triesen', 'Balzers', 'Eschen'],
        'Lithuania': ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai', 'Panevėžys'],
        'Luxembourg': ['Luxembourg City', 'Esch-sur-Alzette', 'Differdange', 'Dudelange', 'Ettelbruck'],
        'Madagascar': ['Antananarivo', 'Toamasina', 'Antsirabe', 'Fianarantsoa', 'Mahajanga'],
        'Malawi': ['Lilongwe', 'Blantyre', 'Mzuzu', 'Zomba', 'Kasungu'],
        'Malaysia': ['Kuala Lumpur', 'George Town', 'Ipoh', 'Shah Alam', 'Petaling Jaya'],
        'Maldives': ['Malé', 'Addu City', 'Fuvahmulah', 'Hithadhoo', 'Kulhudhuffushi'],
        'Mali': ['Bamako', 'Sikasso', 'Mopti', 'Koutiala', 'Kayes'],
        'Malta': ['Valletta', 'Birkirkara', 'Mosta', 'Qormi', 'Żabbar'],
        'Marshall Islands': ['Majuro', 'Ebeye', 'Arno', 'Jaluit', 'Wotje'],
        'Mauritania': ['Nouakchott', 'Nouadhibou', 'Kiffa', 'Zouérat', 'Atar'],
        'Mauritius': ['Port Louis', 'Beau Bassin-Rose Hill', 'Vacoas-Phoenix', 'Curepipe', 'Quatre Bornes'],
        'Mexico': ['Mexico City', 'Ecatepec', 'Guadalajara', 'Puebla City', 'Ciudad Juárez'],
        'Micronesia': ['Palikir', 'Weno', 'Tofol', 'Colonia', 'Nan Madol'],
        'Moldova': ['Chișinău', 'Tiraspol', 'Bălți', 'Bender', 'Rîbnița'],
        'Monaco': ['Monaco-Ville', 'Monte Carlo', 'La Condamine', 'Fontvieille', 'Moneghetti'],
        'Mongolia': ['Ulaanbaatar', 'Erdenet', 'Darkhan', 'Choibalsan', 'Ölgii'],
        'Montenegro': ['Podgorica', 'Nikšić', 'Herceg Novi', 'Pljevlja', 'Budva'],
        'Morocco': ['Rabat', 'Casablanca', 'Fes', 'Marrakesh', 'Agadir'],
        'Mozambique': ['Maputo', 'Matola', 'Beira', 'Nampula', 'Chimoio'],
        'Myanmar': ['Naypyidaw', 'Yangon', 'Mandalay', 'Mawlamyine', 'Bago'],
        'Namibia': ['Windhoek', 'Rundu', 'Walvis Bay', 'Swakopmund', 'Oshakati'],
        'Nauru': ['Yaren', 'Denigomodu', 'Meneng', 'Buada', 'Aiwo'],
        'Nepal': ['Kathmandu', 'Pokhara', 'Patan', 'Biratnagar', 'Dharan'],
        'Netherlands': ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven'],
        'New Zealand': ['Wellington', 'Auckland', 'Christchurch', 'Manukau City', 'Waitakere City'],
        'Nicaragua': ['Managua', 'León', 'Masaya', 'Chinandega', 'Matagalpa'],
        'Niger': ['Niamey', 'Zinder', 'Maradi', 'Agadez', 'Tahoua'],
        'Nigeria': ['Lagos', 'Kano', 'Ibadan', 'Kaduna', 'Port Harcourt'],
        'North Korea': ['Pyongyang', 'Hamhung', 'Chongjin', 'Nampo', 'Wonsan'],
        'North Macedonia': ['Skopje', 'Bitola', 'Kumanovo', 'Prilep', 'Tetovo'],
        'Norway': ['Oslo', 'Bergen', 'Stavanger', 'Trondheim', 'Drammen'],
        'Oman': ['Muscat', 'Seeb', 'Salalah', 'Bawshar', 'Sohar'],
        'Pakistan': ['Karachi', 'Lahore', 'Faisalabad', 'Rawalpindi', 'Multan'],
        'Palau': ['Ngerulmud', 'Melekeok', 'Koror', 'Airai', 'Ngaraard'],
        'Palestine': ['Jerusalem', 'Gaza City', 'Hebron', 'Nablus', 'Rafah'],
        'Panama': ['Panama City', 'San Miguelito', 'Tocumen', 'David', 'Arraiján'],
        'Papua New Guinea': ['Port Moresby', 'Lae', 'Arawa', 'Mount Hagen', 'Popondetta'],
        'Paraguay': ['Asunción', 'Ciudad del Este', 'San Lorenzo', 'Lambaré', 'Fernando de la Mora'],
        'Peru': ['Lima', 'Arequipa', 'Callao', 'Trujillo', 'Chiclayo'],
        'Philippines': ['Quezon City', 'Manila', 'Davao City', 'Caloocan', 'Cebu City'],
        'Poland': ['Warsaw', 'Kraków', 'Łódź', 'Wrocław', 'Poznań'],
        'Portugal': ['Lisbon', 'Porto', 'Vila Nova de Gaia', 'Amadora', 'Braga'],
        'Qatar': ['Doha', 'Al Rayyan', 'Umm Salal', 'Al Wakrah', 'Al Khor'],
        'Romania': ['Bucharest', 'Cluj-Napoca', 'Timișoara', 'Iași', 'Constanța'],
        'Russia': ['Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yekaterinburg', 'Nizhny Novgorod'],
        'Rwanda': ['Kigali', 'Butare', 'Gitarama', 'Ruhengeri', 'Gisenyi'],
        'Saint Kitts and Nevis': ['Basseterre', 'Charlestown', 'Dieppe Bay Town', 'Half Way Tree', 'Middle Island'],
        'Saint Lucia': ['Castries', 'Vieux Fort', 'Micoud', 'Dennery', 'Gros Islet'],
        'Saint Vincent and the Grenadines': ['Kingstown', 'Georgetown', 'Byera Village', 'Port Elizabeth', 'Biabou'],
        'Samoa': ['Apia', 'Vaitele', 'Faleula', 'Siusega', 'Malie'],
        'San Marino': ['City of San Marino', 'Borgo Maggiore', 'Serravalle', 'Domagnano', 'Fiorentino'],
        'São Tomé and Príncipe': ['São Tomé', 'Neves', 'Santo António', 'Santana', 'Trindade'],
        'Saudi Arabia': ['Riyadh', 'Jeddah', 'Mecca', 'Medina', 'Sulţānah'],
        'Senegal': ['Dakar', 'Thiès', 'Kaolack', 'Ziguinchor', 'Rufisque'],
        'Serbia': ['Belgrade', 'Novi Sad', 'Niš', 'Zemun', 'Kragujevac'],
        'Seychelles': ['Victoria', 'Anse Boileau', 'Bel Ombre', 'Beau Vallon', 'Cascade'],
        'Sierra Leone': ['Freetown', 'Bo', 'Kenema', 'Koidu', 'Makeni'],
        'Singapore': ['Singapore', 'Jurong East', 'Woodlands', 'Tampines', 'Bedok'],
        'Slovakia': ['Bratislava', 'Košice', 'Prešov', 'Žilina', 'Nitra'],
        'Slovenia': ['Ljubljana', 'Maribor', 'Celje', 'Kranj', 'Velenje'],
        'Solomon Islands': ['Honiara', 'Auki', 'Gizo', 'Buala', 'Kirakira'],
        'Somalia': ['Mogadishu', 'Hargeisa', 'Berbera', 'Kismayo', 'Marka'],
        'South Africa': ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth'],
        'South Korea': ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon'],
        'South Sudan': ['Juba', 'Wau', 'Malakal', 'Yei', 'Aweil'],
        'Spain': ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza'],
        'Sri Lanka': ['Colombo', 'Dehiwala-Mount Lavinia', 'Moratuwa', 'Jaffna', 'Negombo'],
        'Sudan': ['Khartoum', 'Omdurman', 'Port Sudan', 'Kassala', 'Al-Ubayyid'],
        'Suriname': ['Paramaribo', 'Lelydorp', 'Nieuw Nickerie', 'Moengo', 'Nieuw Amsterdam'],
        'Sweden': ['Stockholm', 'Gothenburg', 'Malmö', 'Uppsala', 'Västerås'],
        'Switzerland': ['Zürich', 'Geneva', 'Basel', 'Lausanne', 'Bern'],
        'Syria': ['Damascus', 'Aleppo', 'Homs', 'Hama', 'Latakia'],
        'Taiwan': ['Taipei', 'Kaohsiung', 'Taichung', 'Tainan', 'Banqiao'],
        'Tajikistan': ['Dushanbe', 'Khujand', 'Kŭlob', 'Qurghonteppa', 'Istaravshan'],
        'Tanzania': ['Dodoma', 'Dar es Salaam', 'Mwanza', 'Zanzibar City', 'Arusha'],
        'Thailand': ['Bangkok', 'Nonthaburi', 'Nakhon Ratchasima', 'Chiang Mai', 'Hat Yai'],
        'Togo': ['Lomé', 'Sokodé', 'Kara', 'Atakpamé', 'Dapaong'],
        'Tonga': ['Nuku\'alofa', 'Neiafu', 'Haveluloto', 'Vaini', 'Pangai'],
        'Trinidad and Tobago': ['Port of Spain', 'Chaguanas', 'San Fernando', 'Arima', 'Point Fortin'],
        'Tunisia': ['Tunis', 'Sfax', 'Sousse', 'Ettadhamen', 'Kairouan'],
        'Turkey': ['Istanbul', 'Ankara', 'Izmir', 'Bursa', 'Adana'],
        'Turkmenistan': ['Ashgabat', 'Turkmenabat', 'Daşoguz', 'Mary', 'Balkanabat'],
        'Tuvalu': ['Funafuti', 'Vaiaku', 'Fongafale', 'Alapi Village', 'Asau Village'],
        'Uganda': ['Kampala', 'Gulu', 'Lira', 'Mbarara', 'Jinja'],
        'Ukraine': ['Kyiv', 'Kharkiv', 'Odesa', 'Dnipro', 'Donetsk'],
        'United Arab Emirates': ['Abu Dhabi', 'Dubai', 'Sharjah', 'Al Ain', 'Ajman'],
        'United Kingdom': ['London', 'Birmingham', 'Manchester', 'Glasgow', 'Liverpool'],
        'United States': ['New York City', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
        'Uruguay': ['Montevideo', 'Salto', 'Ciudad de la Costa', 'Paysandú', 'Las Piedras'],
        'Uzbekistan': ['Tashkent', 'Namangan', 'Samarkand', 'Andijan', 'Bukhara'],
        'Vanuatu': ['Port Vila', 'Luganville', 'Norsup', 'Port-Olry', 'Isangel'],
        'Vatican City': ['Vatican City'],
        'Venezuela': ['Caracas', 'Maracaibo', 'Valencia', 'Barquisimeto', 'Ciudad Guayana'],
        'Vietnam': ['Ho Chi Minh City', 'Hanoi', 'Haiphong', 'Can Tho', 'Bien Hoa'],
        'Yemen': ['Sanaa', 'Al Hudaydah', 'Ta\'izz', 'Aden', 'Ibb'],
        'Zambia': ['Lusaka', 'Kitwe', 'Ndola', 'Kabwe', 'Chingola'],
        'Zimbabwe': ['Harare', 'Bulawayo', 'Chitungwiza', 'Mutare', 'Gweru'],
      };
      
    
    

    return(
        <div className="flex items-center justify-center w-3xl h-screen  ">
            <div className="w-full border-b-8 m-5 p-5 rounded-lg border-white bg-white text-red-700 font-mono">
                <Typography variant="h3" gutterBottom className="text-center text-xl text-red-700">
                    Details Form
                </Typography>

                <form className="p-4 ml-4 mr-4 grid md:grid-cols-2 gap-x-70 gap-y-8  w-full" >
                    {['firstName' , 'lastName' , 'email' , 'phoneNumber' , 'nationalID', 'age' ].map(field=>(

                        <div key={field}>
                            <TextField 
                            label ={capitalizeFirstLetter( field==='nationalID'? 'National ID':field.replace(/([A-Z])/g , ' $1'))}
                            name={field}
                            type={
                                field==='email'? 'email': (field === 'phoneNumber' ||field ==='nationalID' ||field ==='age') ? 'number':'text'
                            }
                            value={userInfo[field]}
                            onChange={handleChange}
                            variant="outlined"
                            error={(field === 'nationalID'&&!!nationalIDError)||(field === 'phoneNumber'&&!!phoneError)}
                            helperText ={(field === 'nationalID'&&!!nationalIDError)?nationalIDError:(field === 'phoneNumber'&&!!phoneError)?phoneError:''}
                            className="text-black w-64"
                            >

                            </TextField>
                        </div>
                        

                    ))}
                     
                   
                        <TextField
                            select
                            label="Country"
                            name="country"
                            value={userInfo.country}
                            onChange={(e)=>{
                                const choosedCountry = e.target.value;
                                handleChange(e as React.ChangeEvent<HTMLInputElement>); //it is inside a function so it must take parameters
                                setCities(citiesList[choosedCountry]);
                            }}
                            variant="outlined"
                            className="text-black w-32"
                            >
                                {countriesList && countriesList.map(country=>(
                                    <MenuItem key={country} value={country}>
                                        {country}
                                    </MenuItem>
                                ))}
                            </TextField>

                            <TextField
                                select
                                label="City"
                                name="city"
                                value={userInfo.city}
                                onChange={handleChange}
                                variant="outlined"
                                className="text-black w-32"
                                disabled = {!userInfo.country}
                            >
                                {cities && cities.map(city=>(
                                    <MenuItem key={city} value={city}>
                                        {city}
                                    </MenuItem>
                                ))}
                            </TextField>



                    
                    
                     <div className="flex flex-row-reverse justify-between items-center mr-20 ml-15 md:col-span-2">
                        
                        <Button 
                        variant="contained"
                        color="primary"
                        onClick={submitHandler}
                        disabled={proceed}
                        className="transition ease-in-out duration-150 transform hover:scale-105"
                        >
                          <Link to={proceed?"/home/userInfo/payment":"#"} > Proceed to Paying</Link>  
                        </Button >
                        
                        
                       <Button
                       variant="contained"
                       color="secondary"
                       onClick={resetForm}
                       className="transition ease-in-out duration-150 transform hover:scale-105"
                        >
                            Reset
                       </Button>
                        
                    </div>
                    {error && <p className="flex text-red-700 mt-2 col-span-2 justify-center">{error}</p>}                    
                </form>
               
            </div>
        </div>
    )
}

export default UserDetailPage;
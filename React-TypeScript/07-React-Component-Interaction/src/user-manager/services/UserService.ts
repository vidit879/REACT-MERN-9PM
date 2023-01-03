import {IUser} from "../models/IUser";

export class UserService {
    private static users: IUser[] = [
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Mezhamir",
                last: "Skripka"
            },
            location: {
                street: {
                    number: 7855,
                    name: "Svyatoshinskiy provulok"
                },
                city: "Selidove",
                state: "Vinnicka",
                country: "Ukraine",
                postcode: 92653,
                coordinates: {
                    latitude: "80.8332",
                    longitude: "-142.7490"
                },
                timezone: {
                    offset: "-3:00",
                    description: "Brazil, Buenos Aires, Georgetown"
                }
            },
            email: "mezhamir.skripka@example.com",
            login: {
                uuid: "8c5ccc1e-a09f-4ad7-a4a3-a5eeef32c2e1",
                username: "purpleduck701",
                password: "donnie",
                salt: "PbL8NZCy",
                md5: "f5c620ff20514dfccc94f1ee1d397edd",
                sha1: "f242048b0eebc428892576ddb66b8bb2c11ecf4e",
                sha256: "d58970b85001160fd29c43a153bb29826fe583ab3c4c74fa5843b89ea28bc727"
            },
            dob: {
                date: "1965-05-05T23:08:43.463Z",
                age: 57
            },
            registered: {
                date: "2020-09-14T06:34:03.674Z",
                age: 2
            },
            phone: "(099) Y21-7180",
            cell: "(097) G03-7529",
            id: {
                name: "",
                value: null
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/91.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/91.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/91.jpg"
            },
            nat: "UA"
        },
        {
            gender: "female",
            name: {
                title: "Ms",
                first: "Ceylan",
                last: "Erçetin"
            },
            location: {
                street: {
                    number: 1584,
                    name: "Mevlana Cd"
                },
                city: "Isparta",
                state: "Aksaray",
                country: "Turkey",
                postcode: 50780,
                coordinates: {
                    latitude: "29.6220",
                    longitude: "-92.5373"
                },
                timezone: {
                    offset: "-3:00",
                    description: "Brazil, Buenos Aires, Georgetown"
                }
            },
            email: "ceylan.ercetin@example.com",
            login: {
                uuid: "05b83ed9-36b5-42e6-97a0-b3f08c6ca4a4",
                username: "smallostrich371",
                password: "hiphop",
                salt: "QdRm0bHV",
                md5: "40e5d27ee2bf34a0fd1bc1e77756b7ab",
                sha1: "2e7fc2a6dae9f3f8444e23d70a8211855a7b552a",
                sha256: "3c36f3c2a3269fa1ad6944b4ae2b62e38f4ff9a45c21dad18664aa4aed9c727a"
            },
            dob: {
                date: "1981-04-06T20:09:19.496Z",
                age: 41
            },
            registered: {
                date: "2007-11-12T22:56:44.947Z",
                age: 15
            },
            phone: "(194)-155-2349",
            cell: "(239)-497-2386",
            id: {
                name: "",
                value: null
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/49.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/49.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/49.jpg"
            },
            nat: "TR"
        },
        {
            gender: "female",
            name: {
                title: "Mrs",
                first: "Renee",
                last: "Tazelaar"
            },
            location: {
                street: {
                    number: 6431,
                    name: "Gelde"
                },
                city: "Oud Gastel",
                state: "Groningen",
                country: "Netherlands",
                postcode: "7183 HU",
                coordinates: {
                    latitude: "2.3137",
                    longitude: "-115.7931"
                },
                timezone: {
                    offset: "-10:00",
                    description: "Hawaii"
                }
            },
            email: "renee.tazelaar@example.com",
            login: {
                uuid: "f7288456-e35f-46fb-b6d9-a8cb61a9a549",
                username: "ticklishswan415",
                password: "catherine",
                salt: "LRYeTp4c",
                md5: "da8473b94d7d629f4bc104b6af7e3a43",
                sha1: "10407939762f5676e5ec00ff14445fbd886fad46",
                sha256: "c02b1bcfecfd5a243f0405c7dfeb7851b4a98e7e86eb0a075bce5a3119f08e5c"
            },
            dob: {
                date: "1946-02-01T09:13:09.613Z",
                age: 76
            },
            registered: {
                date: "2020-04-23T16:20:12.614Z",
                age: 2
            },
            phone: "(0936) 851748",
            cell: "(06) 48797671",
            id: {
                name: "BSN",
                value: "57334433"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/59.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/59.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/59.jpg"
            },
            nat: "NL"
        },
        {
            gender: "female",
            name: {
                title: "Ms",
                first: "Mónica",
                last: "Lemus"
            },
            location: {
                street: {
                    number: 4646,
                    name: "Calle Cepeda"
                },
                city: "Chinameca",
                state: "Sonora",
                country: "Mexico",
                postcode: 88751,
                coordinates: {
                    latitude: "36.6032",
                    longitude: "113.5325"
                },
                timezone: {
                    offset: "-7:00",
                    description: "Mountain Time (US & Canada)"
                }
            },
            email: "monica.lemus@example.com",
            login: {
                uuid: "1b3e03dd-50e9-427b-844f-74e59d81b6de",
                username: "purpleduck400",
                password: "blues1",
                salt: "0whiw1Vb",
                md5: "8b22dee8c9f9cc2697665a6784ab94df",
                sha1: "ba94c6bfff1e64b105fd4593fba18da5c3b194eb",
                sha256: "5ead7705ef527fafe937f682c8e8454d841bd35597e73005856946e9ad6ef70f"
            },
            dob: {
                date: "1954-11-24T14:31:51.221Z",
                age: 68
            },
            registered: {
                date: "2021-02-03T18:08:04.700Z",
                age: 1
            },
            phone: "(676) 527 4938",
            cell: "(629) 293 4104",
            id: {
                name: "NSS",
                value: "99 00 36 2212 2"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/23.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/23.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/23.jpg"
            },
            nat: "MX"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Gordon",
                last: "Diaz"
            },
            location: {
                street: {
                    number: 9127,
                    name: "Woodland St"
                },
                city: "Queanbeyan",
                state: "South Australia",
                country: "Australia",
                postcode: 4833,
                coordinates: {
                    latitude: "-9.3917",
                    longitude: "114.9382"
                },
                timezone: {
                    offset: "+3:00",
                    description: "Baghdad, Riyadh, Moscow, St. Petersburg"
                }
            },
            email: "gordon.diaz@example.com",
            login: {
                uuid: "cfcac29b-5566-465b-9d64-cafb7e2722ce",
                username: "whitewolf617",
                password: "bellaco",
                salt: "kvs2Aqwy",
                md5: "3ce6f5b0d4ff8786b5a8dba6e8a5f32b",
                sha1: "918186375e56f34c54aab68043e1bbd1df2ea463",
                sha256: "b9b46cacc435e26268071457c58211bf84f67e50436151c684ef99301fbbe3cf"
            },
            dob: {
                date: "1948-12-04T02:08:27.648Z",
                age: 74
            },
            registered: {
                date: "2017-08-09T17:04:35.387Z",
                age: 5
            },
            phone: "05-6307-8733",
            cell: "0404-557-717",
            id: {
                name: "TFN",
                value: "389161461"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/14.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/14.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/14.jpg"
            },
            nat: "AU"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Alexander",
                last: "Harvey"
            },
            location: {
                street: {
                    number: 1525,
                    name: "Rookery Road"
                },
                city: "Mullingar",
                state: "Kildare",
                country: "Ireland",
                postcode: 67408,
                coordinates: {
                    latitude: "89.1047",
                    longitude: "-47.4609"
                },
                timezone: {
                    offset: "+3:30",
                    description: "Tehran"
                }
            },
            email: "alexander.harvey@example.com",
            login: {
                uuid: "125dc02a-352e-43c9-93c7-f5d4f4f67207",
                username: "bluebear334",
                password: "fulham",
                salt: "Ilecx2gc",
                md5: "106e02475b856ba3753ef3806a0d7081",
                sha1: "fcbe0944a95d5bc31267f467bd10adce3c0a98b4",
                sha256: "8d252aac5d9f55ede462120ccab35f01875b84182bcbb428e8832c3b3ad4b5e9"
            },
            dob: {
                date: "1967-12-19T19:26:02.957Z",
                age: 55
            },
            registered: {
                date: "2017-07-08T15:19:58.446Z",
                age: 5
            },
            phone: "031-718-1182",
            cell: "081-248-7253",
            id: {
                name: "PPS",
                value: "8108635T"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/0.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/0.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/0.jpg"
            },
            nat: "IE"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "نيما",
                last: "موسوی"
            },
            location: {
                street: {
                    number: 332,
                    name: "شهید محمد منتظری"
                },
                city: "ساوه",
                state: "مازندران",
                country: "Iran",
                postcode: 82365,
                coordinates: {
                    latitude: "85.8589",
                    longitude: "173.9057"
                },
                timezone: {
                    offset: "+9:30",
                    description: "Adelaide, Darwin"
                }
            },
            email: "nym.mwswy@example.com",
            login: {
                uuid: "01494424-4076-439e-bb84-254d64562fe9",
                username: "angrysnake744",
                password: "christy",
                salt: "VyNTiTjJ",
                md5: "4fe385e88ed48f2e4a986a356e2318d4",
                sha1: "b087e2c15f338aef6c45d4de6c7fd58097a37e3d",
                sha256: "821d196432146fc4594aae04909a006f2c043bd23efd192ab22ca4b7d74118e3"
            },
            dob: {
                date: "1990-04-11T20:37:19.720Z",
                age: 32
            },
            registered: {
                date: "2014-09-30T03:26:34.229Z",
                age: 8
            },
            phone: "031-49155655",
            cell: "0927-701-6864",
            id: {
                name: "",
                value: null
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/93.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/93.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/93.jpg"
            },
            nat: "IR"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Alejandro",
                last: "Serrano"
            },
            location: {
                street: {
                    number: 5477,
                    name: "Calle de La Almudena"
                },
                city: "Valladolid",
                state: "Comunidad Valenciana",
                country: "Spain",
                postcode: 87573,
                coordinates: {
                    latitude: "-76.4429",
                    longitude: "94.5904"
                },
                timezone: {
                    offset: "+3:00",
                    description: "Baghdad, Riyadh, Moscow, St. Petersburg"
                }
            },
            email: "alejandro.serrano@example.com",
            login: {
                uuid: "28a51ceb-6506-499b-b3c5-ef3a16a17750",
                username: "beautifulzebra771",
                password: "cancel",
                salt: "zc1vz0C8",
                md5: "633b461cc895aedafcf11338f08b9e23",
                sha1: "eb9ef88796f1c38068b9ac7ed2652e4fd4859f40",
                sha256: "be25b5e684459dd3acb4468cd8b8b3fb8e8409a3a9fe6f23b8f7cf88efe842b3"
            },
            dob: {
                date: "1976-11-08T23:43:33.196Z",
                age: 46
            },
            registered: {
                date: "2002-08-06T05:42:05.248Z",
                age: 20
            },
            phone: "945-198-939",
            cell: "678-741-064",
            id: {
                name: "DNI",
                value: "08716616-K"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/22.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/22.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/22.jpg"
            },
            nat: "ES"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Girish",
                last: "Bhardwaj"
            },
            location: {
                street: {
                    number: 7085,
                    name: "Mint St"
                },
                city: "Srinagar",
                state: "Nagaland",
                country: "India",
                postcode: 64682,
                coordinates: {
                    latitude: "-20.3858",
                    longitude: "33.1346"
                },
                timezone: {
                    offset: "+11:00",
                    description: "Magadan, Solomon Islands, New Caledonia"
                }
            },
            email: "girish.bhardwaj@example.com",
            login: {
                uuid: "2ba6a821-05d1-4052-846c-04c1d22d447d",
                username: "sadmeercat394",
                password: "kansas",
                salt: "GKdQnveR",
                md5: "3c220b0225c565127ce2be8cbef1e8ee",
                sha1: "719c6cea41849cb2ad0b58b894b5cce4fd82ef4d",
                sha256: "66d0c0be2ac6c16f54d5dd22371d40b00b277833d93b930958db7932613720cf"
            },
            dob: {
                date: "1985-08-19T18:13:59.080Z",
                age: 37
            },
            registered: {
                date: "2006-01-19T07:41:21.322Z",
                age: 16
            },
            phone: "8784054165",
            cell: "9284789041",
            id: {
                name: "UIDAI",
                value: "704960469595"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/32.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/32.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/32.jpg"
            },
            nat: "IN"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Arnas",
                last: "Vold"
            },
            location: {
                street: {
                    number: 7692,
                    name: "Ullensakergata"
                },
                city: "Solfjellsjyen",
                state: "Oppland",
                country: "Norway",
                postcode: "3008",
                coordinates: {
                    latitude: "49.4044",
                    longitude: "-88.1010"
                },
                timezone: {
                    offset: "+5:00",
                    description: "Ekaterinburg, Islamabad, Karachi, Tashkent"
                }
            },
            email: "arnas.vold@example.com",
            login: {
                uuid: "84c20ea4-993e-4ae0-b8ac-c6ab2b2930db",
                username: "goldendog277",
                password: "bulldogs",
                salt: "OTdO3qM9",
                md5: "cdab457a69263bf76f06d5d7b0ec82c7",
                sha1: "6ad86eb136cb2e56f6453337f45ee3ec96e7aea2",
                sha256: "3d105ff6466f442386dc0760c9f795ebc4b8117c33c54468d12f44d790dba95a"
            },
            dob: {
                date: "2000-08-20T18:41:03.178Z",
                age: 22
            },
            registered: {
                date: "2011-08-13T02:34:18.458Z",
                age: 11
            },
            phone: "66335507",
            cell: "98516651",
            id: {
                name: "FN",
                value: "20080074558"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/17.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/17.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/17.jpg"
            },
            nat: "NO"
        },
        {
            gender: "female",
            name: {
                title: "Ms",
                first: "Inés",
                last: "Pastor"
            },
            location: {
                street: {
                    number: 264,
                    name: "Calle Mota"
                },
                city: "Cartagena",
                state: "Ceuta",
                country: "Spain",
                postcode: 25401,
                coordinates: {
                    latitude: "54.7031",
                    longitude: "43.5577"
                },
                timezone: {
                    offset: "-7:00",
                    description: "Mountain Time (US & Canada)"
                }
            },
            email: "ines.pastor@example.com",
            login: {
                uuid: "f627e199-9983-4cb0-aada-7511e887f8d6",
                username: "greenmeercat977",
                password: "pathfind",
                salt: "hTNcMEA9",
                md5: "91bfe1a556e1136fdc2419a9a0a08ec8",
                sha1: "061d975f8d0ff28a760bfe906a07c99b6b3e1d0b",
                sha256: "42d32d1c88ce87ef3760c588a824f1d7a1dee59dc1a2b84b8f4fe2e54b483552"
            },
            dob: {
                date: "1969-10-24T11:36:23.940Z",
                age: 53
            },
            registered: {
                date: "2010-09-20T12:06:17.367Z",
                age: 12
            },
            phone: "985-417-025",
            cell: "625-151-199",
            id: {
                name: "DNI",
                value: "55930334-G"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/36.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/36.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/36.jpg"
            },
            nat: "ES"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Nimit",
                last: "Shukla"
            },
            location: {
                street: {
                    number: 3149,
                    name: "Santhekatte"
                },
                city: "Kolhapur",
                state: "Kerala",
                country: "India",
                postcode: 63944,
                coordinates: {
                    latitude: "-84.0757",
                    longitude: "127.2667"
                },
                timezone: {
                    offset: "-9:00",
                    description: "Alaska"
                }
            },
            email: "nimit.shukla@example.com",
            login: {
                uuid: "56f7f30f-b903-4782-bde5-fceb710970db",
                username: "happymouse637",
                password: "italian",
                salt: "owpbuvCg",
                md5: "fe5cd741c0403eb118ce1175af545c43",
                sha1: "676b6195daa92fd53e84e8198ad85fc5e3912e68",
                sha256: "62d4c1ce1eb77edf23085a758310c1a239c2377819c223104761da17abdb7b7d"
            },
            dob: {
                date: "1983-02-16T08:20:20.721Z",
                age: 39
            },
            registered: {
                date: "2011-04-07T04:44:28.641Z",
                age: 11
            },
            phone: "9120783055",
            cell: "7584702158",
            id: {
                name: "UIDAI",
                value: "931913076444"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/50.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/50.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/50.jpg"
            },
            nat: "IN"
        },
        {
            gender: "female",
            name: {
                title: "Mrs",
                first: "Oliwia",
                last: "Eskeland"
            },
            location: {
                street: {
                    number: 3341,
                    name: "Svoldergata"
                },
                city: "Måløy",
                state: "Sogn og Fjordane",
                country: "Norway",
                postcode: "4094",
                coordinates: {
                    latitude: "-57.0598",
                    longitude: "46.3935"
                },
                timezone: {
                    offset: "+3:30",
                    description: "Tehran"
                }
            },
            email: "oliwia.eskeland@example.com",
            login: {
                uuid: "92b68362-fb8e-4b98-90b3-51b8b95b359b",
                username: "crazybird478",
                password: "patricia",
                salt: "5YPv0rlA",
                md5: "eb06980f6a6a836bf735fbbfaf9641dc",
                sha1: "b6184c396422d2007a44556ce666a7e3ff5d5a2b",
                sha256: "42369718d8f3583f3672c100badc11b2aaf14a8fd69d22ede3b97dfede46c15c"
            },
            dob: {
                date: "1975-01-27T20:29:38.538Z",
                age: 47
            },
            registered: {
                date: "2016-01-14T22:46:49.675Z",
                age: 6
            },
            phone: "51900117",
            cell: "92393903",
            id: {
                name: "FN",
                value: "27017513007"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/49.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/49.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/49.jpg"
            },
            nat: "NO"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Necati",
                last: "Ekici"
            },
            location: {
                street: {
                    number: 3009,
                    name: "Necatibey Cd"
                },
                city: "Bolu",
                state: "Malatya",
                country: "Turkey",
                postcode: 64292,
                coordinates: {
                    latitude: "58.0176",
                    longitude: "-25.7253"
                },
                timezone: {
                    offset: "+5:00",
                    description: "Ekaterinburg, Islamabad, Karachi, Tashkent"
                }
            },
            email: "necati.ekici@example.com",
            login: {
                uuid: "096199a3-d7bd-4f07-ac16-fa169e8f8c31",
                username: "angrymeercat940",
                password: "buckshot",
                salt: "jHnpOiJf",
                md5: "42ff411faccbe29b87c5220df5a88a90",
                sha1: "dec3a931f65cc14b35549b189d193b91ab3a7bb3",
                sha256: "f29533ef1d425b8f7c94403a37cbceb4d359057f6e9039dc109769cf738e48ed"
            },
            dob: {
                date: "1989-01-14T02:22:52.632Z",
                age: 33
            },
            registered: {
                date: "2008-06-08T17:09:42.424Z",
                age: 14
            },
            phone: "(239)-644-5411",
            cell: "(074)-010-3463",
            id: {
                name: "",
                value: null
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/10.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/10.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/10.jpg"
            },
            nat: "TR"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Simeon",
                last: "Drljača"
            },
            location: {
                street: {
                    number: 4906,
                    name: "Jovanče Micića"
                },
                city: "Kruševac",
                state: "Central Banat",
                country: "Serbia",
                postcode: 79569,
                coordinates: {
                    latitude: "77.2341",
                    longitude: "66.4547"
                },
                timezone: {
                    offset: "+6:00",
                    description: "Almaty, Dhaka, Colombo"
                }
            },
            email: "simeon.drljaca@example.com",
            login: {
                uuid: "cec86ab0-ae49-4f24-a3f7-29a55880cad9",
                username: "goldendog861",
                password: "scuba",
                salt: "6YFmq8JX",
                md5: "63c5ec53effc9ef76e6c1bd9f194624a",
                sha1: "27c821ed7e2a959916664a2178ca0061842bf43c",
                sha256: "6ad9427be8d6bed8d9b4be29d1fe9cb71f3b915d0f370669f9e5700079244f3c"
            },
            dob: {
                date: "1964-06-12T17:46:45.230Z",
                age: 58
            },
            registered: {
                date: "2004-02-29T21:03:05.336Z",
                age: 18
            },
            phone: "010-3229-159",
            cell: "064-4759-241",
            id: {
                name: "SID",
                value: "360617054"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/62.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/62.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/62.jpg"
            },
            nat: "RS"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Jayden",
                last: "Kowalski"
            },
            location: {
                street: {
                    number: 9312,
                    name: "Concession Road 6"
                },
                city: "Trenton",
                state: "British Columbia",
                country: "Canada",
                postcode: "W9J 9B0",
                coordinates: {
                    latitude: "-59.9059",
                    longitude: "71.4613"
                },
                timezone: {
                    offset: "+2:00",
                    description: "Kaliningrad, South Africa"
                }
            },
            email: "jayden.kowalski@example.com",
            login: {
                uuid: "b8284486-bf30-4d27-a1ba-0976fa59f765",
                username: "purplegorilla884",
                password: "maxx",
                salt: "33DAPlb8",
                md5: "f632443a12e18a0abadc98eb32572adf",
                sha1: "c78a52439be0f4222e618c9730b590d544332f1b",
                sha256: "85c256a90886b0ed834600b38ef1d2f9f1ab3c7ee2f3a1e1b50387f379f9f193"
            },
            dob: {
                date: "1945-05-13T05:50:23.849Z",
                age: 77
            },
            registered: {
                date: "2012-08-26T15:37:33.323Z",
                age: 10
            },
            phone: "A83 P36-6491",
            cell: "A34 B81-4311",
            id: {
                name: "SIN",
                value: "877732529"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/19.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/19.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/19.jpg"
            },
            nat: "CA"
        },
        {
            gender: "female",
            name: {
                title: "Miss",
                first: "Sue",
                last: "Horton"
            },
            location: {
                street: {
                    number: 7300,
                    name: "Cherry St"
                },
                city: "Wichita Falls",
                state: "Texas",
                country: "United States",
                postcode: 50312,
                coordinates: {
                    latitude: "57.5736",
                    longitude: "32.4970"
                },
                timezone: {
                    offset: "-6:00",
                    description: "Central Time (US & Canada), Mexico City"
                }
            },
            email: "sue.horton@example.com",
            login: {
                uuid: "61b13938-2821-4fe8-8e60-457482ae15d8",
                username: "greenwolf512",
                password: "candace",
                salt: "BZVbUwGM",
                md5: "6240dcffda1687f048915bab8fd3a502",
                sha1: "a1e6dff26c86053d25ae7556cb8dad9c3373c388",
                sha256: "a2bd6aeb46e41b75275833d4540d8946169363df2755816a045c3713a023ffc7"
            },
            dob: {
                date: "1998-02-09T10:24:14.163Z",
                age: 24
            },
            registered: {
                date: "2011-02-27T23:39:50.145Z",
                age: 11
            },
            phone: "(930) 753-0181",
            cell: "(218) 350-3964",
            id: {
                name: "SSN",
                value: "315-38-9696"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/65.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/65.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/65.jpg"
            },
            nat: "US"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Christoffer",
                last: "Jørgensen"
            },
            location: {
                street: {
                    number: 4341,
                    name: "Præstbrovej"
                },
                city: "Hornbæk",
                state: "Syddanmark",
                country: "Denmark",
                postcode: 25046,
                coordinates: {
                    latitude: "-1.5943",
                    longitude: "35.7771"
                },
                timezone: {
                    offset: "-5:00",
                    description: "Eastern Time (US & Canada), Bogota, Lima"
                }
            },
            email: "christoffer.jorgensen@example.com",
            login: {
                uuid: "35305571-7699-4a78-b141-bd509828c7c0",
                username: "orangeduck641",
                password: "freefall",
                salt: "VbVm18Mx",
                md5: "db51b620496b286a9cf6fc0b28a3d71e",
                sha1: "afc4d81e8aa683861481513b9c280a0478f17408",
                sha256: "6f277b93ae0321f83525835655ff14a2dbaff2bf28af25e90024548e4e62d345"
            },
            dob: {
                date: "1999-10-08T21:01:57.655Z",
                age: 23
            },
            registered: {
                date: "2015-01-31T09:57:17.565Z",
                age: 7
            },
            phone: "55892127",
            cell: "06840351",
            id: {
                name: "CPR",
                value: "081099-7879"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/31.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/31.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/31.jpg"
            },
            nat: "DK"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Abhijith",
                last: "Prabhakaran"
            },
            location: {
                street: {
                    number: 6867,
                    name: "Sampige Rd"
                },
                city: "Shimla",
                state: "Tamil Nadu",
                country: "India",
                postcode: 98784,
                coordinates: {
                    latitude: "-36.6308",
                    longitude: "-125.1522"
                },
                timezone: {
                    offset: "-8:00",
                    description: "Pacific Time (US & Canada)"
                }
            },
            email: "abhijith.prabhakaran@example.com",
            login: {
                uuid: "8ef53f25-1cb6-467b-9c25-95d8bceda5f4",
                username: "ticklishleopard772",
                password: "falcon",
                salt: "762AIKzU",
                md5: "344d9492087bdefa75ae107fe1152e09",
                sha1: "79200d39dabd45ddd0bd78ec625417f46ac9d61e",
                sha256: "e2e2ff6eecf23dfbb8c4c1ced369863d13864c322cffa7ba68842682cafc93a2"
            },
            dob: {
                date: "1976-02-20T21:06:30.840Z",
                age: 46
            },
            registered: {
                date: "2012-08-30T16:38:07.960Z",
                age: 10
            },
            phone: "7527136741",
            cell: "8573081196",
            id: {
                name: "UIDAI",
                value: "912268595207"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/49.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/49.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/49.jpg"
            },
            nat: "IN"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Darren",
                last: "Coleman"
            },
            location: {
                street: {
                    number: 733,
                    name: "Alexander Road"
                },
                city: "Buncrana",
                state: "Cavan",
                country: "Ireland",
                postcode: 45824,
                coordinates: {
                    latitude: "-57.3772",
                    longitude: "-27.0248"
                },
                timezone: {
                    offset: "+10:00",
                    description: "Eastern Australia, Guam, Vladivostok"
                }
            },
            email: "darren.coleman@example.com",
            login: {
                uuid: "a4168a87-2f10-421b-a46f-4f15b7e5b5b4",
                username: "beautifulbear666",
                password: "porsche1",
                salt: "T6Tg8YYr",
                md5: "08287256d4b0a9c87c0664dd36720284",
                sha1: "4dddbacbd9914bfe8cace5d776086799c15ae5c6",
                sha256: "f6242db6cec83b1f1e30bcc0615722a4de34c575f2c9f2dd36fd99012d68e78a"
            },
            dob: {
                date: "1984-06-20T21:32:35.095Z",
                age: 38
            },
            registered: {
                date: "2019-10-16T14:24:43.425Z",
                age: 3
            },
            phone: "041-297-0297",
            cell: "081-201-1321",
            id: {
                name: "PPS",
                value: "9403965T"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/98.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/98.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/98.jpg"
            },
            nat: "IE"
        }
    ];

    public static getAllUsers(): IUser[] {
        return this.users;
    }
}
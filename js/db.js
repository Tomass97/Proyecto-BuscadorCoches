const autos = [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2020,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'A4',
		year: 2020,
		precio: 40000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'A6',
		year: 2020,
		precio: 35000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2019,
		precio: 80000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2020,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'A3',
		year: 2017,
		precio: 55000,
		puertas: 2,
		color: 'Negro',
		transmision:
			'manual'
	},
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2020,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2017,
		precio: 60000,
		puertas: 2,
		color: 'Negro',
		transmision: 'manual'
	},
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'A4',
		year: 2016,
		precio: 30000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'Q3',
		year: 2022,
		precio: 48000,
		puertas: 4,
		color: 'Plata',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'S5',
		year: 2020,
		precio: 60000,
		puertas: 2,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'TT',
		year: 2021,
		precio: 55000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'Q8',
		year: 2023,
		precio: 85000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'A5',
		year: 2019,
		precio: 50000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'X7',
		year: 2022,
		precio: 90000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'M4',
		year: 2021,
		precio: 75000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'i8',
		year: 2023,
		precio: 120000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'X6',
		year: 2020,
		precio: 85000,
		puertas: 4,
		color: 'Gris',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'M2',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'GLE Coupe',
		year: 2022,
		precio: 95000,
		puertas: 4,
		color: 'Plateado',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'AMG GT',
		year: 2020,
		precio: 120000,
		puertas: 2,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'C63 AMG',
		year: 2021,
		precio: 110000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'E-Class',
		year: 2019,
		precio: 80000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'S-Class',
		year: 2023,
		precio: 150000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2020,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'A4',
		year: 2020,
		precio: 40000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'A6',
		year: 2020,
		precio: 35000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2019,
		precio: 80000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2020,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'A3',
		year: 2017,
		precio: 55000,
		puertas: 2,
		color: 'Negro',
		transmision:
			'manual'
	},
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2020,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2017,
		precio: 60000,
		puertas: 2,
		color: 'Negro',
		transmision: 'manual'
	},
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'A4',
		year: 2016,
		precio: 30000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'Q3',
		year: 2022,
		precio: 48000,
		puertas: 4,
		color: 'Plata',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'S5',
		year: 2020,
		precio: 60000,
		puertas: 2,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'TT',
		year: 2021,
		precio: 55000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'Q8',
		year: 2023,
		precio: 85000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'A5',
		year: 2019,
		precio: 50000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'X7',
		year: 2022,
		precio: 90000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'M4',
		year: 2021,
		precio: 75000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'i8',
		year: 2023,
		precio: 120000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'X6',
		year: 2020,
		precio: 85000,
		puertas: 4,
		color: 'Gris',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'M2',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Traverse',
		year: 2021,
		precio: 42000,
		puertas: 4,
		color: 'Gris',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Cruze',
		year: 2020,
		precio: 28000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Colorado',
		year: 2022,
		precio: 35000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Equinox',
		year: 2019,
		precio: 30000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Silverado',
		year: 2023,
		precio: 48000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	}
];

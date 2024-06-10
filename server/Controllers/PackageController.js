const packages = [
  { name: 'Hair Cutting', price: 50 },
  { name: 'Nail Art', price: 40 },
  { name: 'Manicure', price: 30 },
  { name: 'Facial', price: 60 },
  { name: 'Pedicure', price: 35 },
  { name: 'Eyebrow Shape', price: 25 },
  { name: 'Hair Coloring', price: 70 },
  { name: 'Normal Makeup', price: 50 },
  { name: 'Bridal Makeup', price: 150 },
  { name: 'Hair Style', price: 40 },
  { name: 'Saree Draping', price: 20 },
  { name: 'Nail Enhancements', price: 55 },
];

exports.getAllPackages = (req, res) => {
  res.json(packages);
};

exports.getPackageByName = (req, res) => {
  const packageName = req.params.packageName;
  const packageDetails = packages.find(pkg => pkg.name === packageName);
  if (packageDetails) {
    res.json(packageDetails);
  } else {
    res.status(404).json({ error: 'Package not found' });
  }
};


const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const MetaAuth = require('meta-auth');
const metaAuth = new MetaAuth({ banner: "Bosagora NFT Marketplace" });

router.get('/', (req, res) => {
  if (typeof window !== 'undefined') {
    console.log('You are on the browser')
    // ✅ Can use window here
  } else {
    console.log('You are on the server')
    // ⛔️ Don't use window here
  }
});

router.get('/:MetaAddress', metaAuth, (req, res) => {
  // Request a challenge from the server
  res.send(req.metaAuth.challenge)
});

router.get('/:MetaMessage/:MetaSignature', metaAuth, (req, res) => {
  if (req.metaAuth.recovered) {
    // Signature matches the cached address/challenge
    // Authentication is valid, assign JWT, etc.
    res.send(req.metaAuth.recovered);
    const token = jwt.sign({ address: req.params.address }, process.env.JWT_SECRET, {expiresIn: '6h'});
    res.status(200).json({
      success: true,
      token: `Bearer ${token}`,
      user: user,
      msg: "You are now logged in."
    });
  } else {
    // User is not authenticated
    res.status(401).send('Invalid credentials');
  };
});

module.exports = router;

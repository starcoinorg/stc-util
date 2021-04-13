<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [addHexPrefix](#addhexprefix)
-   [baToJSON](#batojson)
-   [BN](#bn)
-   [bufferToHex](#buffertohex)
-   [bufferToInt](#buffertoint)
-   [defineProperties](#defineproperties)
-   [ecrecover](#ecrecover)
-   [ecsign](#ecsign)
-   [fromRpcSig](#fromrpcsig)
-   [fromSigned](#fromsigned)
-   [generateAddress](#generateaddress)
-   [generateAddress2](#generateaddress2)
-   [hashPersonalMessage](#hashpersonalmessage)
-   [importPublic](#importpublic)
-   [isPrecompiled](#isprecompiled)
-   [isValidAddress](#isvalidaddress)
-   [isValidChecksumAddress](#isvalidchecksumaddress)
-   [isValidPrivate](#isvalidprivate)
-   [isValidPublic](#isvalidpublic)
-   [keccak](#keccak)
-   [keccak256](#keccak256)
-   [privateToAddress](#privatetoaddress)
-   [pubToAddress](#pubtoaddress)
-   [ripemd160](#ripemd160)
-   [rlp](#rlp)
-   [rlphash](#rlphash)
-   [secp256k1](#secp256k1)
-   [setLengthRight](#setlengthright)
-   [sha256](#sha256)
-   [toBuffer](#tobuffer)
-   [toChecksumAddress](#tochecksumaddress)
-   [toRpcSig](#torpcsig)
-   [toUnsigned](#tounsigned)
-   [unpad](#unpad)
-   [isValidSignature](#isvalidsignature)
-   [isZeroAddress](#iszeroaddress)
-   [KECCAK256_NULL](#keccak256_null)
-   [KECCAK256_NULL_S](#keccak256_null_s)
-   [KECCAK256_RLP](#keccak256_rlp)
-   [KECCAK256_RLP_ARRAY](#keccak256_rlp_array)
-   [KECCAK256_RLP_ARRAY_S](#keccak256_rlp_array_s)
-   [KECCAK256_RLP_S](#keccak256_rlp_s)
-   [lsetLength](#lsetlength)
-   [MAX_INTEGER](#max_integer)
-   [privateToPublic](#privatetopublic)
-   [TWO_POW256](#two_pow256)
-   [zeroAddress](#zeroaddress)
-   [zeros](#zeros)

## addHexPrefix

[index.js:563-569](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L563-L569 "Source code on GitHub")

Adds "0x" to a given `String` if it does not already start with "0x"

**Parameters**

-   `str` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## baToJSON

[index.js:613-623](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L613-L623 "Source code on GitHub")

Converts a `Buffer` or `Array` to JSON

**Parameters**

-   `ba` **([Buffer](https://nodejs.org/api/buffer.html) \| [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array))** 

Returns **([Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) \| [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | null)** 

## BN

[index.js:62-62](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L62-L62 "Source code on GitHub")

[`BN`](https://github.com/indutny/bn.js)

Type: [Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)

## bufferToHex

[index.js:194-197](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L194-L197 "Source code on GitHub")

Converts a `Buffer` into a hex `String`

**Parameters**

-   `buf` **[Buffer](https://nodejs.org/api/buffer.html)** 

Returns **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## bufferToInt

[index.js:185-187](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L185-L187 "Source code on GitHub")

Converts a `Buffer` to a `Number`

**Parameters**

-   `buf` **[Buffer](https://nodejs.org/api/buffer.html)** 


-   Throws **any** If the input number exceeds 53 bits.

Returns **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

## defineProperties

[index.js:635-728](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L635-L728 "Source code on GitHub")

Defines properties on a `Object`. It make the assumption that underlying data is binary.

**Parameters**

-   `self` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** the `Object` to define properties on
-   `fields` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** an array fields to define. Fields can contain:-   `name` - the name of the properties
    -   `length` - the number of bytes the field can have
    -   `allowLess` - if the field can be less than the length
    -   `allowEmpty`
-   `data` **any** data to be validated against the definitions

## ecrecover

[index.js:383-391](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L383-L391 "Source code on GitHub")

ECDSA public key recovery from signature

**Parameters**

-   `msgHash` **[Buffer](https://nodejs.org/api/buffer.html)** 
-   `v` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
-   `r` **[Buffer](https://nodejs.org/api/buffer.html)** 
-   `s` **[Buffer](https://nodejs.org/api/buffer.html)** 
-   `chainId` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)?** 

Returns **[Buffer](https://nodejs.org/api/buffer.html)** publicKey

## ecsign

[index.js:351-359](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L351-L359 "Source code on GitHub")

ECDSA sign

**Parameters**

-   `msgHash` **[Buffer](https://nodejs.org/api/buffer.html)** 
-   `privateKey` **[Buffer](https://nodejs.org/api/buffer.html)** 
-   `chainId` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)?** 

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## fromRpcSig

[index.js:421-440](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L421-L440 "Source code on GitHub")

Convert signature format of the `eth_sign` RPC method to signature parameters
NOTE: all because of a bug in geth: <https://github.com/ethereum/go-ethereum/issues/2053>

**Parameters**

-   `sig` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## fromSigned

[index.js:204-206](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L204-L206 "Source code on GitHub")

Interprets a `Buffer` as a signed integer and returns a `BN`. Assumes 256-bit numbers.

**Parameters**

-   `num` **[Buffer](https://nodejs.org/api/buffer.html)** 

Returns **BN** 

## generateAddress

[index.js:507-521](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L507-L521 "Source code on GitHub")

Generates an address of a newly created contract

**Parameters**

-   `from` **[Buffer](https://nodejs.org/api/buffer.html)** the address which is creating this new address
-   `nonce` **[Buffer](https://nodejs.org/api/buffer.html)** the nonce of the from account

Returns **[Buffer](https://nodejs.org/api/buffer.html)** 

## generateAddress2

[index.js:530-546](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L530-L546 "Source code on GitHub")

Generates an address for a contract created using CREATE2

**Parameters**

-   `from` **[Buffer](https://nodejs.org/api/buffer.html)** the address which is creating this new address
-   `salt` **[Buffer](https://nodejs.org/api/buffer.html)** a salt
-   `initCode` **[Buffer](https://nodejs.org/api/buffer.html)** the init code of the contract being created

Returns **[Buffer](https://nodejs.org/api/buffer.html)** 

## hashPersonalMessage

[index.js:369-372](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L369-L372 "Source code on GitHub")

Returns the keccak-256 hash of `message`, prefixed with the header used by the `eth_sign` RPC call.
The output of this function can be fed into `ecsign` to produce the same signature as the `eth_sign`
call for a given `message`, or fed to `ecrecover` along with a signature to recover the public key
used to produce the signature.

**Parameters**

-   `message`  

Returns **[Buffer](https://nodejs.org/api/buffer.html)** hash

## importPublic

[index.js:336-342](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L336-L342 "Source code on GitHub")

Converts a public key to the Ethereum format.

**Parameters**

-   `publicKey` **[Buffer](https://nodejs.org/api/buffer.html)** 

Returns **[Buffer](https://nodejs.org/api/buffer.html)** 

## isPrecompiled

[index.js:553-556](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L553-L556 "Source code on GitHub")

Returns true if the supplied address belongs to a precompiled account (Byzantium)

**Parameters**

-   `address` **([Buffer](https://nodejs.org/api/buffer.html) \| [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** 

Returns **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## isValidAddress

[index.js:456-458](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L456-L458 "Source code on GitHub")

Checks if the address is a valid. Accepts checksummed addresses too

**Parameters**

-   `address` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## isValidChecksumAddress

[index.js:497-499](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L497-L499 "Source code on GitHub")

Checks if the address is a valid checksummed address

**Parameters**

-   `address` **[Buffer](https://nodejs.org/api/buffer.html)** 

Returns **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## isValidPrivate

[index.js:279-281](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L279-L281 "Source code on GitHub")

Checks if the private key satisfies the rules of the curve secp256k1.

**Parameters**

-   `privateKey` **[Buffer](https://nodejs.org/api/buffer.html)** 

Returns **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## isValidPublic

[index.js:290-301](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L290-L301 "Source code on GitHub")

Checks if the public key satisfies the rules of the curve secp256k1
and the requirements of Ethereum.

**Parameters**

-   `publicKey` **[Buffer](https://nodejs.org/api/buffer.html)** The two points of an uncompressed key, unless sanitize is enabled
-   `sanitize` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Accept public keys in other formats (optional, default `false`)

Returns **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## keccak

[index.js:223-228](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L223-L228 "Source code on GitHub")

Creates Keccak hash of the input

**Parameters**

-   `a` **([Buffer](https://nodejs.org/api/buffer.html) \| [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) \| [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number))** the input data
-   `bits` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** the Keccak width (optional, default `256`)

Returns **[Buffer](https://nodejs.org/api/buffer.html)** 

## keccak256

[index.js:235-237](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L235-L237 "Source code on GitHub")

Creates Keccak-256 hash of the input, alias for keccak(a, 256)

**Parameters**

-   `a` **([Buffer](https://nodejs.org/api/buffer.html) \| [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) \| [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number))** the input data

Returns **[Buffer](https://nodejs.org/api/buffer.html)** 

## privateToAddress

[index.js:447-449](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L447-L449 "Source code on GitHub")

Returns the ethereum address of a given private key

**Parameters**

-   `privateKey` **[Buffer](https://nodejs.org/api/buffer.html)** A private key must be 256 bits wide

Returns **[Buffer](https://nodejs.org/api/buffer.html)** 

## pubToAddress

[index.js:310-318](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L310-L318 "Source code on GitHub")

Returns the ethereum address of a given public key.
Accepts "Ethereum public keys" and SEC1 encoded keys.

**Parameters**

-   `pubKey` **[Buffer](https://nodejs.org/api/buffer.html)** The two points of an uncompressed key, unless sanitize is enabled
-   `sanitize` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Accept public keys in other formats (optional, default `false`)

Returns **[Buffer](https://nodejs.org/api/buffer.html)** 

## ripemd160

[index.js:255-263](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L255-L263 "Source code on GitHub")

Creates RIPEMD160 hash of the input

**Parameters**

-   `a` **([Buffer](https://nodejs.org/api/buffer.html) \| [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) \| [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number))** the input data
-   `padded` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** whether it should be padded to 256 bits or not

Returns **[Buffer](https://nodejs.org/api/buffer.html)** 

## rlp

[index.js:68-68](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L68-L68 "Source code on GitHub")

[`rlp`](https://github.com/ethereumjs/rlp)

Type: [Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)

## rlphash

[index.js:270-272](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L270-L272 "Source code on GitHub")

Creates SHA-3 hash of the RLP encoded version of the input

**Parameters**

-   `a` **([Buffer](https://nodejs.org/api/buffer.html) \| [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) \| [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number))** the input data

Returns **[Buffer](https://nodejs.org/api/buffer.html)** 

## secp256k1

[index.js:74-74](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L74-L74 "Source code on GitHub")

[`secp256k1`](https://github.com/cryptocoinjs/secp256k1-node/)

Type: [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)

## setLengthRight

[index.js:131-133](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L131-L133 "Source code on GitHub")

Right Pads an `Array` or `Buffer` with leading zeros till it has `length` bytes.
Or it truncates the beginning if it exceeds.

**Parameters**

-   `msg` **([Buffer](https://nodejs.org/api/buffer.html) \| [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array))** the value to pad
-   `length` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** the number of bytes the output should be

Returns **([Buffer](https://nodejs.org/api/buffer.html) \| [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array))** 

## sha256

[index.js:244-247](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L244-L247 "Source code on GitHub")

Creates SHA256 hash of the input

**Parameters**

-   `a` **([Buffer](https://nodejs.org/api/buffer.html) \| [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) \| [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number))** the input data

Returns **[Buffer](https://nodejs.org/api/buffer.html)** 

## toBuffer

[index.js:153-177](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L153-L177 "Source code on GitHub")

Attempts to turn a value into a `Buffer`. As input it supports `Buffer`, `String`, `Number`, null/undefined, `BN` and other objects with a `toArray()` method.

**Parameters**

-   `v` **any** the value

## toChecksumAddress

[index.js:476-490](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L476-L490 "Source code on GitHub")

Returns a checksummed address

**Parameters**

-   `address` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## toRpcSig

[index.js:401-413](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L401-L413 "Source code on GitHub")

Convert signature parameters into the format of `eth_sign` RPC method

**Parameters**

-   `v` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
-   `r` **[Buffer](https://nodejs.org/api/buffer.html)** 
-   `s` **[Buffer](https://nodejs.org/api/buffer.html)** 
-   `chainId` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)?** 

Returns **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** sig

## toUnsigned

[index.js:213-215](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L213-L215 "Source code on GitHub")

Converts a `BN` to an unsigned integer and returns it as a `Buffer`. Assumes 256-bit numbers.

**Parameters**

-   `num` **BN** 

Returns **[Buffer](https://nodejs.org/api/buffer.html)** 

## unpad

[index.js:140-148](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L140-L148 "Source code on GitHub")

Trims leading zeros from a `Buffer` or an `Array`

**Parameters**

-   `a` **([Buffer](https://nodejs.org/api/buffer.html) \| [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) \| [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** 

Returns **([Buffer](https://nodejs.org/api/buffer.html) \| [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) \| [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** 

## isValidSignature

[index.js:582-606](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L582-L606 "Source code on GitHub")

Validate ECDSA signature

**Parameters**

-   `v` **[Buffer](https://nodejs.org/api/buffer.html)** 
-   `r` **[Buffer](https://nodejs.org/api/buffer.html)** 
-   `s` **[Buffer](https://nodejs.org/api/buffer.html)** 
-   `homestead` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**  (optional, default `true`)
-   `chainId` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)?** 

Returns **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## isZeroAddress

[index.js:466-469](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L466-L469 "Source code on GitHub")

Checks if a given address is a zero address

**Parameters**

-   `address` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## KECCAK256_NULL

[index.js:32-32](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L32-L32 "Source code on GitHub")

Keccak-256 hash of null (a `Buffer`)

Type: [Buffer](https://nodejs.org/api/buffer.html)

## KECCAK256_NULL_S

[index.js:26-26](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L26-L26 "Source code on GitHub")

Keccak-256 hash of null (a `String`)

Type: [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)

## KECCAK256_RLP

[index.js:56-56](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L56-L56 "Source code on GitHub")

Keccak-256 hash of the RLP of null (a `Buffer`)

Type: [Buffer](https://nodejs.org/api/buffer.html)

## KECCAK256_RLP_ARRAY

[index.js:44-44](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L44-L44 "Source code on GitHub")

Keccak-256 of an RLP of an empty array (a `Buffer`)

Type: [Buffer](https://nodejs.org/api/buffer.html)

## KECCAK256_RLP_ARRAY_S

[index.js:38-38](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L38-L38 "Source code on GitHub")

Keccak-256 of an RLP of an empty array (a `String`)

Type: [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)

## KECCAK256_RLP_S

[index.js:50-50](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L50-L50 "Source code on GitHub")

Keccak-256 hash of the RLP of null  (a `String`)

Type: [String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)

## lsetLength

[index.js:106-122](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L106-L122 "Source code on GitHub")

Left Pads an `Array` or `Buffer` with leading zeros till it has `length` bytes.
Or it truncates the beginning if it exceeds.

**Parameters**

-   `msg` **([Buffer](https://nodejs.org/api/buffer.html) \| [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array))** the value to pad
-   `length` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** the number of bytes the output should be
-   `right` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** whether to start padding form the left or right (optional, default `false`)

Returns **([Buffer](https://nodejs.org/api/buffer.html) \| [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array))** 

## MAX_INTEGER

[index.js:14-14](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L14-L14 "Source code on GitHub")

the max integer that this VM can handle (a `BN`)

Type: BN

## privateToPublic

[index.js:325-329](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L325-L329 "Source code on GitHub")

Returns the ethereum public key of a given private key

**Parameters**

-   `privateKey` **[Buffer](https://nodejs.org/api/buffer.html)** A private key must be 256 bits wide

Returns **[Buffer](https://nodejs.org/api/buffer.html)** 

## TWO_POW256

[index.js:20-20](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L20-L20 "Source code on GitHub")

2^256 (a `BN`)

Type: BN

## zeroAddress

[index.js:91-95](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L91-L95 "Source code on GitHub")

Returns a zero address

Returns **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## zeros

[index.js:82-84](https://github.com/ethereumjs/ethereumjs-util/blob/9396416913125711e526a05591e3ce8471c3a528/index.js#L82-L84 "Source code on GitHub")

Returns a buffer filled with 0s

**Parameters**

-   `bytes` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** the number of bytes the buffer should be

Returns **[Buffer](https://nodejs.org/api/buffer.html)** 
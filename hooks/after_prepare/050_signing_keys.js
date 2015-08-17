#!/usr/bin/env node
var path = require( "path" ),
    fs = require( "fs" ),
    shell = require( "shelljs" ),
    rootdir = process.argv[ 2 ],
    keystoreRoot = rootdir + "/hooks/android_keystore",
    androidroot = rootdir + "/platforms/android";

try {
    fs.lstatSync( androidroot ).isDirectory();
}
catch( e ) {
    console.log( "android platform does not exist. nothing to do here." );
    process.exit(0);
}

// for some reason, using shell.cp() would throw this error:
// "cp: copy File Sync: could not write to dest file (code=ENOENT)"
shell.exec( "cp -Rf " + keystoreRoot + "/* " + androidroot , {silent:true} );

console.log( "Copied Android KeyStore and settings" );

process.exit(0);
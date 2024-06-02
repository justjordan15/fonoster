#!/bin/bash

set -e

KEY_SIZE=2048
KEY_ALGORITHM="rsa"
KEY_OUT_DIR=".keys"

mkdir -p $KEY_OUT_DIR

openssl genpkey -algorithm $KEY_ALGORITHM -out $KEY_OUT_DIR/private.pem -pkeyopt rsa_keygen_bits:$KEY_SIZE

openssl rsa -in $KEY_OUT_DIR/private.pem -pubout  -out $KEY_OUT_DIR/public.pem

echo "keys generated in the '$KEY_OUT_DIR' directory."
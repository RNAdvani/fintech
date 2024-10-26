import React, { useState, useEffect } from 'react';
import { Camera, CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { Linking, StyleSheet, Text, TouchableOpacity, View, Button, Alert } from 'react-native';

// Define types for CameraType and transaction details
type CameraFacing = CameraType;
interface TransactionDetails {
  txnid: string | null;
  responseCode: string | null;
  status: string | null;
  amount: string | null;
}

export default function App() {
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [facing, setFacing] = useState<CameraFacing>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [isDelayComplete, setIsDelayComplete] = useState<boolean>(false);
  const [paymentDetails, setPaymentDetails] = useState<TransactionDetails | null>(null);



  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  // Parse the transaction details from the deep link URL

  // Start scanning with a 3-second delay
  const handleStartScanning = (): void => {
    setIsScanning(true);
    setIsDelayComplete(false);

    // Set a delay before starting the scan (e.g., 3 seconds)
    setTimeout(() => {
      setIsDelayComplete(true);
    }, 3000);
  };

  const handleCloseCamera = (): void => {
    setIsScanning(false);
  };

  const handlePayment = (upiUrl: string): void => {
    Linking.openURL(upiUrl)
      .then(() => console.log("Payment initiated with URL: ", upiUrl))
      .catch(err => console.error("An error occurred", err));
  };

  if (isScanning) {
    // Render the camera view if scanning is active
    return (
      <View style={styles.container}>
        <CameraView
          style={styles.camera}
          facing={facing}
          onBarcodeScanned={(data) => {
            if (isDelayComplete) {
              console.log("QR Code Data:", data); // Log the QR code data
              const upiUrl = data.data; // Assuming the data contains the UPI URL
              handlePayment(upiUrl); // Call the payment function
              handleCloseCamera(); // Close the camera
            }
          }}
          barcodeScannerSettings={{
            barcodeTypes: ["qr"],
          }}
        />
        <View style={styles.overlay}>
          <View style={styles.qrRegion}>
            <Text style={styles.qrText}>Scan QR Code Here</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleCloseCamera}>
            <Text style={styles.text}>Close Camera</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.message}>Welcome to the QR Scanner App</Text>
      <Button title="Start QR Scan" onPress={handleStartScanning} />

      {/* Display transaction details after payment */}
      {paymentDetails && (
        <View style={styles.paymentDetails}>
          <Text style={styles.detailText}>Transaction ID: {paymentDetails.txnid}</Text>
          <Text style={styles.detailText}>Response Code: {paymentDetails.responseCode}</Text>
          <Text style={styles.detailText}>Status: {paymentDetails.status}</Text>
          <Text style={styles.detailText}>Amount: {paymentDetails.amount}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
    fontSize: 18,
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrRegion: {
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 20,
    width: '70%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  qrText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    flex: 0.3,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  paymentDetails: {
    marginTop: 20,
  },
  detailText: {
    fontSize: 16,
    marginVertical: 4,
  },
});

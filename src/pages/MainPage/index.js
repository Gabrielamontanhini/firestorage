import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker'
import { ref, uploadBytesResumable, getDownloadURL, getStorage } from "firebase/storage"
import { addDoc, collection, onSnapshot } from "firebase/firestore"

export default function MainPage() {
    const [image, setImage] = useState("https://img.freepik.com/premium-photo/cute-wild-cat-sakura-tree-cherry-blossom-branch-kitten-illustration_691560-7604.jpg")
    const [progress, setProgress] = useState(0)
    async function pickImage() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1
        })
        if (!result.canceled) {
            setImage(result.assets[0].uri)
            console.log(result.assets[0].uri)
            await uploadImage(result.assets[0].uri, "image")
        }
    }

    function blobImage(uri) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            xhr.onload = function () {
                console.log("blobado")
                resolve(xhr.response)
            }
            xhr.onerror = function () {
                reject(new Error('uriToBlob failed'))
            }
            xhr.responseType = 'blob'
            xhr.open('GET', uri, true)

            xhr.send(null)
        })
    }

    async function uploadImage(uri, fileType) {
        console.log("amntes do storageputa")
        const blob = await blobImage(uri)

        const storage = getStorage();
        const storageRef = ref(storage, "Primeira");
        console.log(storageRef)
        console.log("depois dessa caralha")



        const uploadImage = uploadBytesResumable(storageRef, blob)
        uploadImage.on("state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                console.log(`Progress ${progress} % done`)
                setProgress(progress.toFixed())
            },
            (error) => {
                console.log(`ERRO DO CARALHO ${error}`)
            },
            () => {
                getDownloadURL(uploadImage.snapshot.ref).then(async (downloadURL) => {
                    console.log("File available at", downloadURL)
                    setImage(downloadURL)
                })
            }
        )
    }



    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
                <Image
                    source={{ uri: image }}
                    style={styles.image}
                />
            </TouchableOpacity>
            <Text>{progress}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingStart: 14,
        paddingEnd: 14,
        backgroundColor: "#FFF0F5",
        alignItems: 'center'
    },
    imageContainer: {
        position: 'absolute',
        top: 20,
        width: 200,
        height: 200,
        borderRadius: 200 / 2,
        borderWidth: 2,
        borderColor: 'black',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99
    },
    image: {
        width: '100%',
        height: '100%'
    }
})
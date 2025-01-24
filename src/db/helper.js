import db from "./db";
import Swal from 'sweetalert2'

export const addData = async (data) => {
    try {
        await db.Products.add(data);
        Swal.fire({
            title: "Success!",
            text: "Product added to cart successfully.",
            icon: "success",
        });
    } catch (error) {
        Swal.fire({
            title: "Mohon maaf!",
            text: `Anda sudah menambahkan product ke keranjang`,
            icon: "warning",
        });
    }
};

export const getAllData = async () => {
    try {
        const data = await db.Products.toArray();
        return data;
    } catch (error) {
        console.error("Gagal mengambil data:", error);
        return [];
    }
};

export const updateData = async (id, newData) => {
    try {
        await db.Products.update(id, newData);
        console.log("Data berhasil diperbarui:", newData);
    } catch (error) {
        console.error("Gagal memperbarui data:", error);
    }
};

export const deleteData = async (id) => {
    try {
        await db.Products.delete(id);
        Swal.fire({
            title: "Success!",
            text: "data berhasil dihapus",
            icon: "success",
        });
    } catch (error) {
        Swal.fire({
            title: "Sory!",
            text: `Terjadi kesalahan saat menghapus data`,
            icon: "error",
        });
    }
};

import ProfessionalsList from "@/components/professionals/ProfessionalsList";
import SearchBar from "@/components/SearchBar";

function ProfessionalsPage() {
    return (
        <>
            <div className="flex flex-col items-center justify-center mt-10">
                <SearchBar />
                <ProfessionalsList />
            </div>
        </>
    )
}


export default ProfessionalsPage;
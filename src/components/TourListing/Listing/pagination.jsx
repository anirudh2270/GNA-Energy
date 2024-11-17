import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationComp = ({ setCurrentPage, currentPage, totalPages }) => {
	const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
	return (
		<Pagination className={"justify-end mt-10"}>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						disabled={currentPage <= 1}
						onClick={() => setCurrentPage((prev) => prev - 1)}
					/>
				</PaginationItem>
				{pageNumbers.map((pageNumber) => (
					<PaginationItem key={pageNumber}>
						<PaginationLink
							isActive={currentPage === pageNumber}
							onClick={() => setCurrentPage(pageNumber)}>
							{pageNumber}
						</PaginationLink>
					</PaginationItem>
				))}
				<PaginationItem>
					<PaginationNext
						disabled={currentPage >= totalPages}
						onClick={() => setCurrentPage((prev) => prev + 1)}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
};

export default PaginationComp;
